import * as React from 'react'
import { observer } from 'mobx-react'
import { Modal, List, Input, Button } from 'antd';

interface State {
	userModalVisible: boolean
}
@observer
export default class CreateGroupModal extends React.Component<{
	visible: boolean
	onCancel: () => void
	onOk: (newName: string) => void
}, {
	newName: string
}> {
	constructor(props) {
		super(props)
		this.state = {
			newName: ''
		}
	}
	render () {
		return (
			<Modal visible={this.props.visible}
				onCancel={this.props.onCancel}
				onOk={() => this.props.onOk(this.state.newName)}>
				<Input value={this.state.newName} onChange={(e) => this.setState({newName: e.target.value})} placeholder="New group name"/>
			</Modal>
		)
	}
}