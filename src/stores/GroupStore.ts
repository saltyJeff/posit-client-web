import { observable, computed } from 'mobx'
import { GroupData, UserData } from 'posit-core';
import { PositClient } from './WSClient';
export type VIEW_MODES = 'FILE' | 'STREAM'
export class GroupStore {
	// current group page state
	@observable group: GroupData = {
		id: -1,
		name: '?',
		users: []
	}
	@observable pageNum: number = 0
	@observable page: GroupData[] = observable.array([])
	changePage = async (page: number) => {
		const response = await PositClient.sendRpc('getGroups', {
			page: page
		})
		PositClient.PAGE_SIZE = response.pageSize
		this.page = response.groups
		this.pageNum = page
	}
	setGroup(group: GroupData) {
		this.group = group
		this.searchTerms = ''
	}
	userFromId(id: number): UserData {
		const user = this.group.users.find((u) => u.id == id)
		if(user == undefined) {
			return {
				'email': '?',
				'id': -1,
				'loginId': 'bleh',
				'name': '?'
			}
		}
		return user
	}
	// current search bar state
	@observable searchTerms: string = ''
	@observable viewMode: VIEW_MODES = 'FILE'
	@observable streamModeOperator: 'AND' | 'OR' = 'AND'
	get searchOp () {
		return this.viewMode == 'FILE' ? 'OR' : this.streamModeOperator
	}
	get searchTokens () {
		return this.searchTerms.split(/\s/g)
	}
}
const storeInst = new GroupStore()

;(window as any).appStore = storeInst
export const groupStore = storeInst