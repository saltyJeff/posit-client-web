import * as React from 'react'
import { observer } from 'mobx-react'
import { state } from '../AppState'
import GroupPicker from '../GroupPicker/GroupPicker';
import GroupView from '../GroupView/GroupView';

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
					state.initialized && <GroupView />
				}
			</div>
		)
	}
}