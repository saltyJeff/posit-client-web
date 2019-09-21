import * as React from 'react'
import { observer } from 'mobx-react'
import { List, Button } from 'antd';
import { state } from '../AppState';

@observer
export default class FolderItem extends React.Component<{
	folderTag: string
}, {}> {
	constructor(props) {
		super(props)
	}
	render () {
		const segments = this.props.folderTag.split('/')
		const folderName = segments[segments.length - 2]+'/'
		return (
			<List.Item>
				<Button onClick={this.changeFolder}>{folderName}</Button>
			</List.Item>
		)
	}
	changeFolder = () => {
		let newTerms = state.searchTerms
		const endStar = newTerms.endsWith('/*')
		if(endStar) {
			newTerms = newTerms.substr(0, newTerms.length - 1)
		}
		if(!newTerms.endsWith('/') && newTerms !== '') {
			newTerms += '/'
		}
		newTerms += this.props.folderTag
		if(endStar) {
			newTerms += '*'
		}
		state.searchTerms = newTerms 
	}
}