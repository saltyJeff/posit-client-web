import { observable, computed, IReactionDisposer, reaction, autorun } from 'mobx'
import { GroupData, Post, Preview } from 'posit-core';
import { PositClient } from './WSClient';
import { groupStore } from './GroupStore';
class PostStore {
	// post view stuff
	@observable page: (string | Post)[] = observable.array([])
	@observable hasMore = true
	@observable loading = false
	@observable pageNum = 0
	@observable viewMoreId = -1

	entryReloader: IReactionDisposer
	constructor () {
		reaction(() => groupStore.group.id, this.reloadPage)
	}
	reloadPage = async () => {
		if(!!this.entryReloader) {
			this.entryReloader()
		}
		// autorun so it responds to change in search tokens
		this.entryReloader = autorun(this.loadInitialPage)
	}
	loadInitialPage = async () => {
		const searchTokens = groupStore.searchTokens
		const viewMode = groupStore.viewMode
		const searchTerms = viewMode == 'FILE' ? [searchTokens[0]] : searchTokens
		//TODO: I don't like this line (why split and rejoin man)
		groupStore.searchTerms = searchTerms.join(' ')
		console.log('querying: ', searchTerms, groupStore.searchOp)
		const currentGroup = groupStore.group
		this.pageNum = 0
		this.loading = false
		const postRes = await PositClient.sendRpc('getPosts', {
			group: currentGroup.id,
			tags: searchTerms,
			page: 0,
			operation: groupStore.searchOp
		})
		if(viewMode == 'FILE') {
			const prefixRes = await PositClient.sendRpc('getPrefixes', {
				group: currentGroup.id,
				prefix: searchTerms[0]
			})
			this.page = (prefixRes.prefixes as any[]).concat(postRes.posts)
		}
		else {
			this.page = postRes.posts
		}
		this.loading = false
	}
	loadMore = async () => {
		const searchTokens = groupStore.searchTokens
		const searchTerms = groupStore.searchTerms
		const pageNum = this.pageNum
		this.loading = true
		const postRes = await PositClient.sendRpc('getPosts', {
			group: groupStore.group.id,
			tags: searchTokens,
			page: pageNum + 1,
			operation: groupStore.searchOp
		})
		// make sure in the meantime nothing changed
		if(groupStore.searchTerms != searchTerms || groupStore.pageNum != pageNum) {
			console.warn('Parameters were changed before page load complete')
			return
		}
		const hasMore = postRes.posts.length >= PositClient.PAGE_SIZE // should never be greater than
		console.log('more posts: ', hasMore)
		const newEntries = this.page.concat(postRes.posts)
		this.page = newEntries
		this.loading = false
		this.pageNum = pageNum + 1
		this.hasMore = hasMore		
	}

	// edit post modal (state is pulled up for reasons)
	@observable modalPost: Post
	@observable modalPreview: Preview | undefined
	@observable postModalVisible: boolean = false
	openPostModal (post: Post, preview: Preview | undefined) {
		this.modalPost = post
		this.modalPreview = preview
		this.postModalVisible = true
	}
	hideModal () {
		this.postModalVisible = false
	}
} 
const storeInst = new PostStore()

;(window as any).appStore = storeInst
export const postStore = storeInst