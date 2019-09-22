import * as React from 'react'
import { observer } from 'mobx-react'
import { Select, Input } from 'antd'
import './PostView.css'
import { groupStore } from '../stores';

@observer
export default class SearchBar extends React.Component<{}, {
	createPostVisible: boolean
}> {
	constructor(props) {
		super(props)
		this.state = {
			createPostVisible: false
		}
	}
	render () {
		return (
			<div className="searchWrapper">
				<Input 
					placeholder="enter search terms.." 
					value={groupStore.searchTerms} 
					onChange={(e) => groupStore.searchTerms = e.target.value}
				/>
				<Select defaultValue={groupStore.viewMode} onChange={(e) => groupStore.viewMode = e} className="searchBarSelect">
					<Select.Option value="FILE">File</Select.Option>
					<Select.Option value="STREAM">Stream</Select.Option>
				</Select>
				{
					groupStore.viewMode == 'STREAM' &&
					<Select defaultValue={groupStore.streamModeOperator} onChange={(e) => groupStore.streamModeOperator = e} className="searchBarSelect">
						<Select.Option value="AND">AND</Select.Option>
						<Select.Option value="OR">OR</Select.Option>
					</Select>
				}
			</div>
		)
	}
}