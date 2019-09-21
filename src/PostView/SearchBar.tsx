import * as React from 'react'
import { observer } from 'mobx-react'
import { state } from '../AppState';
import { Select, Input, Button, Affix } from 'antd'
import { Permissions } from 'posit-server-common/dist/Permission';
import CreatePostModal from './CreatePostModal';
import './PostView.css'

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
					value={state.searchTerms} 
					onChange={(e) => state.searchTerms = e.target.value}
				/>
				<Select defaultValue={state.viewMode} onChange={(e) => state.viewMode = e} className="searchBarSelect">
					<Select.Option value="FILE">File</Select.Option>
					<Select.Option value="STREAM">Stream</Select.Option>
				</Select>
				{
					state.viewMode == 'STREAM' &&
					<Select defaultValue={state.streamModeOperator} onChange={(e) => state.streamModeOperator = e} className="searchBarSelect">
						<Select.Option value="AND">AND</Select.Option>
						<Select.Option value="OR">OR</Select.Option>
					</Select>
				}
			</div>
		)
	}
}