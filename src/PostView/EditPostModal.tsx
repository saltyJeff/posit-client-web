import * as React from 'react'
import { observer } from 'mobx-react'
import { Modal, List, Input, Button } from 'antd';
import { postStore, groupStore, PositClient } from '../stores';

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
		if(!!postStore.modalPost && this.state.lastPostId != postStore.modalPost.id) {
			const expectedTagList = postStore.modalPost.tags.join(' ')
			this.setState({tagList: expectedTagList, lastPostId: postStore.modalPost.id})
		}
	}
	render () {
		const post = postStore.modalPost
		if(!post) {
			return <></>
		}
		const user = groupStore.userFromId(post.poster)
		const preview = postStore.modalPreview
		return (
			<Modal visible={postStore.postModalVisible}
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
		const post = postStore.modalPost
		const preview = postStore.modalPreview
		const tags = this.state.tagList.split(' ').filter((t) => t.length > 0)
		if(tags.toString() == post.tags.toString()) {
			this.hide()
			return
		}
		console.log(tags, this.state.tagList)
		
		await PositClient.sendRpc('editTags', {
			group: groupStore.id,
			tags: tags,
			post: post.id,
			operation: 'set'
		})

		this.hide()
	}
	onDelete = async () => {
		await PositClient.sendRpc('deletePost', {
			group: groupStore.id,
			post: postStore.modalPost.id,
		})
		this.hide()
	}
	hide = () => {
		postStore.postModalVisible = false
	}
}