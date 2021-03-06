import * as React from 'react'
import { GroupData } from 'posit-core';
import { groupStore } from '../stores';

interface Props {
	key: string
	group: GroupData
}
export default class GroupSelectButton extends React.Component<Props, {}> {
	constructor(props) {
		super(props)
	}
	render () {
		return (
			<div>
				<a onClick={this.setGroup} href={'#'+this.props.group.id} className="groupLink">{this.props.group.name} ({this.props.group.id})</a>
			</div>
		)
	}
	setGroup = () => {
		groupStore.setGroup(this.props.group)
		groupStore.pickerVisible = false
	}
}