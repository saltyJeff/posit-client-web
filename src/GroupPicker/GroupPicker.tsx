import { observer } from "mobx-react";
import * as React from 'react'
import GroupSelectButton from "./GroupSelectButton";
import { InputNumber, Button, Drawer } from "antd";
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
				<Drawer
					title={
						<>
							<p>{appStore.username} <Button type="link" onClick={appStore.signout}>SIGNOUT</Button></p>
							<Button onClick={() => this.setState({createGroupVisible: true})}>Create Group</Button> 
						</>
					}
					placement="right"
					closable={true}
					visible={groupStore.pickerVisible}
					onClose={() => groupStore.pickerVisible = false}
				>
					Page: <InputNumber
						value={groupStore.pageNum} 
						onChange={(e) => {
							e = e || 0
							this.changePage(e)
						}}
						min={0}
						step={1}/>
					<div className="groupWrapper">
					{
						groupStore.page.map((v) => {
							return (<GroupSelectButton key={v.id+''} group={v}/>)
						})
					}
					</div>
				</Drawer>
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