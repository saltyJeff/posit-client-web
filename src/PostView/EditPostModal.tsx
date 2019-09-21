import * as React from 'react'
import { observer } from 'mobx-react'
import { Modal, List, Input, Button } from 'antd';
import { state } from '../AppState';
import { Preview, Post } from 'posit-server-common/dist/Entities';

@observer
export default class EditPostModal extends React.Component<{}, {
	tagList: string
	lastPostId: number
}> {
	constructor(props) {
		super(props)
		this.state = {
			tagList: '',
			lastPostId: -1
		}
	}
	componentDidUpdate () {
		if(!!state.modalPost && this.state.lastPostId != state.modalPost.id) {
			const expectedTagList = state.modalPost.tags.join(' ')
			this.setState({tagList: expectedTagList, lastPostId: state.modalPost.id})
		}
	}
	render () {
		const post = state.modalPost
		if(!post) {
			return <></>
		}
		const user = state.userFromId(post.poster)
		const preview = state.modalPreview
		return (
			<Modal visible={state.postModalVisible}
				onCancel={this.hide}
				onOk={this.onOk}>
				<h1>Post Details:</h1>
				<p>Poster: {user.name}</p>
				<p>Poster Email: {user.email}</p>
				<p>ID: {post.id}</p>
				<p>Link: <a href={post.url} target="_blank">{post.url}</a></p>
				<p>MIME type: {post.mime}</p>
				<p>Has Preview: {post.hasPreview ? 'true' : 'false'}</p>
				<p>Tags:</p>
				<Input value={this.state.tagList} onChange={(e) => this.setState({tagList: e.target.value})} placeholder="Tags"/>
				{
					!!preview &&
					<div>
						<h2>Preview Details:</h2>
						<pre>{JSON.stringify(preview, null, 2)}</pre>
					</div>
				}
				<Button type="danger" onClick={this.onDelete}>Delete Post</Button>
			</Modal>
		)
	}
	onOk = async () => {
		const post = state.modalPost
		const preview = state.modalPreview
		const tags = this.state.tagList.split(' ').filter((t) => t.length > 0)
		if(tags.toString() == post.tags.toString()) {
			this.hide()
			return
		}
		console.log(tags, this.state.tagList)
		
		await state.ws.sendRpc('editTags', {
			group: state.currentGroup.id,
			tags: tags,
			post: post.id,
			operation: 'set'
		})

		this.hide()
	}
	onDelete = async () => {
		await state.ws.sendRpc('deletePost', {
			group: state.currentGroup.id,
			post: state.modalPost.id,
		})
		this.hide()
	}
	hide = () => {
		state.postModalVisible = false
	}
}