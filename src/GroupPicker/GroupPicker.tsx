import { observer } from "mobx-react";
import * as React from 'react'
import GroupSelectButton from "./GroupSelectButton";
import { InputNumber, Button } from "antd";
import CreateGroupModal from "./CreateGroupModal";
import './GroupPicker.css'
import { appStore, groupStore, PositClient } from "../stores";

interface State {
	createGroupVisible: boolean
}
@observer
export default class GroupPicker extends React.Component<{}, State> {
	constructor(props) {
		super(props)
		this.state = {
			createGroupVisible: false
		}
	}
	render () {
		return (
			<div>
				<div>
					Page: <InputNumber
						value={groupStore.pageNum} 
						onChange={(e) => {
							e = e || 0
							this.changePage(e)
						}}
						min={0}
						step={1}/>
					<Button onClick={() => this.setState({createGroupVisible: true})}>Create Group</Button> 
					<p style={{display: 'inline-block', marginLeft: 10}}>{appStore.username} - <Button type="link" onClick={appStore.signout}>SIGNOUT</Button></p>
				</div>
				<div className="groupWrapper">
				{
					groupStore.page.map((v) => {
						return (<GroupSelectButton key={v.id+''} group={v}/>)
					})
				}
				</div>
				<CreateGroupModal
					visible={this.state.createGroupVisible}
					onOk={this.createGroup}
					onCancel={() => this.setState({createGroupVisible: false})}
				/>
			</div>
		)
	}
	changePage = async (page: number) => {
		groupStore.changePage(page)
	}
	createGroup = async (newName: string) => {
		PositClient.sendRpc('makeGroup', {
			name: newName
		})
		this.setState({createGroupVisible: false})
	}
}