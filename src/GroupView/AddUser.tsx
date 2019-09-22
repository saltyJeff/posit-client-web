import * as React from 'react'
import { observer } from 'mobx-react'
import { Select, Input, Button } from 'antd'
import { Permissions } from 'posit-core'
import { PositClient, groupStore } from '../stores';

interface State {
	email: string
	role: Permissions
}
@observer
export default class AddUser extends React.Component<{}, State> {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			role: 'WRITE'
		}
	}
	render () {
		return (
			<div>
				<p>Add a user</p>
				<Input type="email" 
					placeholder="email" 
					value={this.state.email} 
					onChange={(e) => this.setState({email: e.target.value})}
				/>
				<Select defaultValue={this.state.role} onChange={(e) => this.setState({role: e})}>
					<Select.Option value="READ">Read</Select.Option>
					<Select.Option value="WRITE">Write</Select.Option>
					<Select.Option value="ADMIN">Admin</Select.Option>
				</Select>
				{
					!!this.state.email.length && <Button onClick={this.addUser}>Add User</Button>
				}
			</div>
		)
	}
	addUser = () => {
		PositClient.sendRpc('editGroup', {
			group: groupStore.id,
			users: [{
				email: this.state.email,
				permissions: this.state.role
			}]
		}).then(console.log)
	}
}