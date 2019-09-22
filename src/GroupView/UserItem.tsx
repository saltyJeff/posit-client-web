import * as React from 'react'
import { observer } from 'mobx-react'
import { List, Select, Button } from 'antd';
import { Permissions, UserData } from 'posit-core';
import { PositClient, groupStore } from '../stores';

@observer
export default class UserItem extends React.Component<{
	user: UserData & {permissions: Permissions}
}, {
	newPerm: Permissions
}> {
	constructor(props) {
		super(props)
		this.state = {
			newPerm: this.props.user.permissions
		}
	}
	render () {
		return (
			<List.Item>
				{this.props.user.name} ({this.props.user.email})
				<Select defaultValue={this.props.user.permissions} onChange={(e) => this.setState({newPerm: e})}>
					<Select.Option value="REMOVED">Remove</Select.Option>
					<Select.Option value="READ">Read</Select.Option>
					<Select.Option value="WRITE">Write</Select.Option>
					<Select.Option value="ADMIN">Admin</Select.Option>
				</Select>
				{
					this.props.user.permissions !== this.state.newPerm && <Button onClick={this.changeRole}>Change</Button>
				}
			</List.Item>
		)
	}
	changeRole = () => {
		PositClient.sendRpc('editGroup', {
			group: groupStore.id,
			users: [{
				email: this.props.user.email,
				permissions: (this.state.newPerm as any)
			}]
		})
	}
}