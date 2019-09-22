import * as React from 'react'
import { observer } from 'mobx-react'
import SearchBar from './SearchBar';
import FileView from './FileView';
import EditPostModal from './EditPostModal';

@observer
export default class PostView extends React.Component<{}, {}> {
	constructor(props) {
		super(props)
	}
	render () {
		return (
			<div>
				<SearchBar />
				<FileView />
				<EditPostModal />
			</div>
		)
	}
}