import * as React from 'react'
import { observer } from 'mobx-react'
import { PageHeader, Button } from 'antd';
import GroupDetailView from './GroupDetailView';
import PostView from '../PostView/PostView';
import { groupStore } from '../stores';

interface State {
	userModalVisible: boolean
}
@observer
export default class GroupView extends React.Component<{}, State> {
	constructor(props) {
		super(props)
		this.state = {
			userModalVisible: false
		}
	}
	render () {
		return (
			<div>
				<PageHeader title={groupStore.group.name} subTitle={groupStore.id}
					extra={[
						<Button key="detailButton" onClick={(e) => {
							this.setState({userModalVisible: true})
						}}>Details</Button>,
						<Button key="groupButton" type="primary" onClick={(e) => {
							groupStore.pickerVisible = true
						}}>Groups</Button>
					]}/>
				<GroupDetailView
					visible={this.state.userModalVisible}
					onCancel={() => this.setState({userModalVisible: false})}
					onOk={() => this.setState({userModalVisible: false})}
				/>
				<PostView />
			</div>
		)
	}
}