import { observable } from 'mobx'
import { PositClient } from './WSClient'
import { notification } from 'antd';
import { groupStore } from './GroupStore';
import { AlertGroupMutateResult, AlertPostMutateResult } from 'posit-core/dist/apiDefinitions/Api/ApiResults';
import { postStore } from './PostStore';

declare var gapi: any //GOOGLE API GLOBAL REF
class AppStore {
	@observable loggedIn: boolean = false
	@observable username: string
	pageSize: number = 10
	login(tokens: string[], url: string, username?: string) {
		this.username = username || 'idk what your name is'
		try {
			PositClient.login(tokens, url)
			const socket = PositClient.socket
			socket.addEventListener('open', this.onLogin)
			socket.addEventListener('close', this.onLogout)
			
			PositClient.setListener(0, groupStore.onGroupMutate)
			PositClient.setListener(1, this.onPostMutate)
			PositClient.onError = (err) => {
				notification.error({
					message: 'Unexpected error',
					description: `An issue has occured. Please report error : (${err.code}):\n${err.message}`,
					duration: 4
				})
			}
		}
		catch(e) {
			console.error('signin issue: ', e)
			this.loggedIn = false
		}
	}
	onLogin = async () => {
		this.loggedIn = true
		console.log('logged in')
		await groupStore.changePage(0)
		if(groupStore.page.length > 0) {
			groupStore.setGroup(groupStore.page[0])
		}
	}
	onLogout = async () => {
		this.loggedIn = false
		console.log('logged out')
	}
	onPostMutate = async (postMutate: AlertPostMutateResult) => {
		if(postMutate.group == groupStore.id) {
			const searchTokens = groupStore.searchTokens
			if(!!postMutate.tags) {
				const tags = postMutate.tags
				if(groupStore.searchOp == 'AND' && searchTokens.every((t) => tags.includes(t))) {
					postStore.reloadPage()
				}
				else {
					if(searchTokens.some((t) => tags.includes(t))) {
						postStore.reloadPage()
					}
					else if(groupStore.viewMode == 'FILE' && searchTokens.some((t) => tags.some((t2) => t2.startsWith(t)))) {
						postStore.reloadPage()
					}
				}
			}
		}
	}
	signout () {
		var auth2 = gapi.auth2.getAuthInstance()
		auth2.signOut().then(function () {
			PositClient.socket.close()
			window.location.reload()
		})
	}
}
const storeInst = new AppStore()

;(window as any).appStore = storeInst
export const appStore = storeInst
