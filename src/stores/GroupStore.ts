import { observable, computed } from 'mobx'
import { GroupData, UserData } from 'posit-core';
import { PositClient } from './WSClient';
import { postStore } from './PostStore';
import { AlertGroupMutateResult } from 'posit-core/dist/apiDefinitions/Api/ApiResults';
import { notification } from 'antd';
export type VIEW_MODES = 'FILE' | 'STREAM'
export class GroupStore {
	// current group page state
	@observable group: GroupData = {
		id: -1,
		name: 'NO GROUP SELECTED',
		users: []
	}
	@observable pickerVisible: boolean = false
	@computed get id () {
		return this.group.id
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

		// reset any open modals
		postStore.postModalVisible = false
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

	onGroupMutate = async (groupMutate: AlertGroupMutateResult) => {
		switch(groupMutate.action) {
			case 'NEW':
				this.onNewGroup(groupMutate)
				break
			case 'EDIT':
				this.onEditGroup(groupMutate)
				break
			case 'REMOVED':
				this.onRemoveGroup(groupMutate)
				break
			default:
				console.log(groupMutate)
		}
	}
	onNewGroup = async (groupMutate: AlertGroupMutateResult) => {
		const key = Date.now()+''
		const newGroupRpc = await PositClient.sendRpc('getGroup', {
			id: groupMutate.id
		})
		// handle error when your notification is group delete
		const newGroup = newGroupRpc.group
		this.changePage(this.pageNum)
		notification.info({
			duration: 0,
			key: key,
			message: `${newGroup.name} (${groupMutate.action})`,
			description: `${groupMutate.user} has added you to group ${newGroup.name} with\n${newGroup.users.map((u) => u.name).toString()}`,
			onClick: () => {
				groupStore.setGroup(newGroup)
				notification.close(key)
			}
		})
	}
	onEditGroup = async (groupMutate: AlertGroupMutateResult) => {
		if(groupMutate.id == groupStore.id) {
			const newGroupRpc = await PositClient.sendRpc('getGroup', {
				id: groupMutate.id
			})
			// handle error when your notification is group delete
			const newGroup = newGroupRpc.group
			groupStore.setGroup(newGroup)
		}
	}
	onRemoveGroup = async (groupMutate: AlertGroupMutateResult) => {
		const key = Date.now()+''
		this.changePage(this.pageNum)
		notification.info({
			duration: 3,
			key: key,
			message: `Removed from group`,
			description: `${groupMutate.user} has removed you from a group`,
			onClick: () => {
				notification.close(key)
			}
		})
		if(groupMutate.id == this.group.id) {
			this.group.name = 'NO GROUP SELECTED'
		}
	}
}
const storeInst = new GroupStore()

;(window as any).groupStore = storeInst
export const groupStore = storeInst