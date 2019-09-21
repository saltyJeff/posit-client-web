import * as React from 'react'
import { observer } from 'mobx-react'
import { Modal, List, Input, Button } from 'antd';
import AddUser from './AddUser';
import UserItem from './UserItem';
import { groupStore, PositClient } from '../stores';

@observer
export default class UserView extends React.Component<{
	visible: boolean
	onCancel: () => void
	onOk: () => void
}, {
	newName: string
}> {
	constructor(props) {
		super(props)
		this.state = {
			newName: groupStore.group.name
		}
	}
	render () {
		return (
			<Modal visible={this.props.visible}
				onCancel={this.props.onCancel}
				onOk={this.props.onOk}
				footer={null}>
				<Input value={this.state.newName} onChange={(e) => this.setState({newName: e.target.value})}/>
				{
					this.state.newName !== groupStore.group.name && <Button onClick={this.changeName}>Change Name</Button>
				}
				<List
					header={<div>Users</div>}
					bordered
					dataSource={groupStore.group.users}
					renderItem={item => (
						<UserItem user={item} />
					)}
				/>
				<AddUser />
			</Modal>
		)
	}
	changeName = () => {
		const newName = this.state.newName
		PositClient.sendRpc('editGroup', {
			'group': groupStore.group.id,
			'name': newName
		})
	}
}