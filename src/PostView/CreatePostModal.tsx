import * as React from 'react'
import { observer } from 'mobx-react'
import { Modal, List, Input, Button } from 'antd';
import { state } from '../AppState';

interface State {
	userModalVisible: boolean
}
@observer
export default class CreatePostModal extends React.Component<{
	visible: boolean
	onCancel: () => void
	onOk: (newName: string, newTags: string[]) => void
}, {
	newUrl: string
	tagList: string
}> {
	constructor(props) {
		super(props)
		this.state = {
			newUrl: '',
			tagList: ''
		}
	}
	componentWillReceiveProps() {
		this.setState({tagList: state.searchTerms.replace('*', '')})
	}
	render () {
		return (
			<Modal visible={this.props.visible}
				onCancel={this.props.onCancel}
				onOk={this.onOk}>
				<Input value={this.state.newUrl} onChange={(e) => this.setState({newUrl: e.target.value})} placeholder="New post url"/>
				<Input value={this.state.tagList} onChange={(e) => this.setState({tagList: e.target.value})} placeholder="New tags"/>
			</Modal>
		)
	}
	onOk = () => {
		if(!this.state.newUrl) {
			this.props.onCancel()
		}
		const tags = this.state.tagList.split(' ').filter((t) => t.length > 0)
		let newUrl = this.state.newUrl
		this.setState({
			newUrl: '',
			tagList: ''
		})
		if(!newUrl.match(/^(https?:|)/g)) {
			newUrl = '//'+newUrl
		}
		this.props.onOk(newUrl, tags)
	}
}