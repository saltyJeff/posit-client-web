import * as React from 'react'
import { observer } from 'mobx-react'
import GroupPicker from '../GroupPicker/GroupPicker';
import GroupView from '../GroupView/GroupView';
import { appStore } from '../stores';

@observer
export default class MainPage extends React.Component<{}, {}> {
	constructor(props) {
		super(props)
	}
	render () {
		return (
			<div>
				<GroupPicker />
				{
					appStore.loggedIn && <GroupView />
				}
			</div>
		)
	}
}