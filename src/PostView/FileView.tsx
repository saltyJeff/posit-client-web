import * as React from 'react'
import { observer } from 'mobx-react'
import { List, Button, Spin, Affix, Divider } from 'antd';
import FolderItem from './FolderItem';
import InfiniteScroll from 'react-infinite-scroller'
import PostItem from './PostItem/PostItem';
import CreatePostModal from './CreatePostModal';
import { postStore, PositClient, groupStore } from '../stores';

@observer
export default class FileView extends React.Component<{}, {
	createPostVisible: boolean
}> {
	constructor(props) {
		super(props)
		this.state = {
			createPostVisible: false
		}
	}
	render () {
		let switched = false
		let firstElem = true
		const viewMoreId = postStore.viewMoreId
		return (
			<div>
				<InfiniteScroll
					initialLoad={false}
					pageStart={0}
					loadMore={postStore.loadMore}
					hasMore={!postStore.loading && postStore.hasMore}
					useWindow={true}
				>
					<List
						locale={{emptyText: <p>No Folders</p>}}
						header={
							this.listHeader()
						}
						bordered
						dataSource={postStore.page}
						grid={{
							sm: 1,
							lg: 2,
							xl: 3
						}}
						renderItem={item => {
							const key = typeof item == 'string' ? item : item.id+'' 
							const listElem = <List.Item key={key}>
								{
									(typeof item == 'string' ? 
									<FolderItem folderTag={item} /> : 
									<PostItem post={item} viewMore={viewMoreId == item.id}/>)
								}
							</List.Item>
							const ret: JSX.Element[] = []
							if(firstElem && typeof item == 'string') {
								firstElem = false
								ret.push(<Divider key="folderDivider">Folders</Divider>)
							}
							// add a divider between folders and posts
							if(!switched && typeof item != 'string') {
								switched = true
								ret.push(<Divider key="filesDivider">Files</Divider>)
							}
							ret.push(listElem)
							return ret	
						}}
						itemLayout="vertical"
					>
						{postStore.loading && postStore.hasMore && (
							<div className="demo-loading-container">
								<Spin />
							</div>
						)}
					</List>
				</InfiniteScroll>
				<CreatePostModal 
					visible={this.state.createPostVisible}
					onCancel={() => this.setState({createPostVisible: false})}
					onOk={this.createPost} />
			</div>
		)
	}
	createPost = async (url: string, tags: string[]) => {
		await PositClient.sendRpc('makePost', {
			group: groupStore.id,
			url: url,
			tags: tags.length > 0 ? tags : undefined
		})
		this.setState({createPostVisible: false})
	}
	goUp = () => {
		if(groupStore.searchTerms === '') {
			return
		}
		const termsSplit = groupStore.searchTerms.split('/')
		termsSplit.splice(termsSplit.length - 2, 2)
		if(termsSplit.length == 0) {
			groupStore.searchTerms = ''
			return
		}
		const newTerms = termsSplit.join('/')+'/'
		groupStore.searchTerms = newTerms
	}
	listHeader = (): JSX.Element => {
		return <Affix offsetTop={10}>
			<div className="listsHeader">
				{
					groupStore.viewMode == 'FILE' && 
					<Button type="primary" 
						onClick={this.goUp} 
						disabled={groupStore.searchTerms == ''}>{groupStore.searchTerms === '' ? 'Root' : 'cd ..'}
					</Button>	
				}
				<span style={{flex: 1}}></span>
				<Button 
					onClick={() => this.setState({createPostVisible: true})} 
					type="primary" 
					className="makePostButton">
						Create Post
				</Button>
			</div>
		</Affix>
	}
}