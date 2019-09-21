import * as React from 'react'
import { observer } from 'mobx-react'
import { List, Card, Button } from 'antd';
import { Post, Preview } from 'posit-server-common/dist/Entities';
import { state } from '../../AppState'
import Previewer from './Previewer';
import './PostItem.css'

interface Props {
	post: Post
	viewMore: boolean
}
export default class PostItem extends React.Component<Props, {
	preview: Preview | undefined
}> {
	constructor(props) {
		super(props)
		this.state = {
			preview: undefined
		}
		this.reloadPreview()
	}
	componentDidUpdate (prevProps: Props) {
		if(JSON.stringify(prevProps.post) != JSON.stringify(this.props.post)) {
			console.log('got new props')
			this.setState({preview: undefined})
			this.reloadPreview()
		}
	}
	//performance enhancement? (doesn't trigger when lambda props are changed)
	shouldComponentUpdate (nextProps: Props, nextState) {
		return nextProps.post.id != this.props.post.id || 
			nextProps.post.mime != this.props.post.mime ||
			nextProps.viewMore != this.props.viewMore ||
			nextProps.post.hasPreview != this.props.post.hasPreview ||
			(JSON.stringify(this.state.preview) != JSON.stringify(nextState.preview))
	}
	render () {
		return (
			<Card
				actions={[
					<Button onClick={this.handleViewMore}>View More</Button>,
					<Button onClick={() => state.openPostModal(this.props.post, this.state.preview)}>Details</Button>
				]}
				key={this.props.post.id+''}
				className="postItem"
				title={this.link()}>
				<Card.Meta
					description={this.cardTitle()}
				/>
				<div className="postBody">
					{
						!!this.state.preview && <Previewer preview={this.state.preview} viewMore={this.props.viewMore}/>
					}
					{
						!this.state.preview && this.renderNonHtml()
					}
				</div>
			</Card>
		)
	}
	handleViewMore = () => {
		if(state.viewMorePost == this.props.post.id) {
			state.viewMorePost = -1
		}
		else {
			state.viewMorePost = this.props.post.id
		}
	}
	cardTitle = () => {
		const postDate = new Date(this.props.post.postDate*1000)
		return `${state.userFromId(this.props.post.poster).name} - ${postDate.toDateString()} (${this.props.post.id})`
	}
	link = (): JSX.Element => {
		return <a target='_blank' href={this.props.post.url} className="postLink">{this.props.post.url}</a>
	}
	renderNonHtml = (): JSX.Element => {
		const {url, mime, hasPreview} = this.props.post
		if(mime.startsWith('video')) {
			return <video src={url} className="standaloneMultimedia"></video>
		}
		if(mime.startsWith('audio')) {
			return <audio src={url} className="standaloneMultimedia"></audio>
		}
		if(mime.startsWith('image')) {
			return <img src={url} className="standaloneMultimedia"></img>
		}
		if(mime == 'text/html' || !hasPreview) {
			return <div>
				<p>No preview found</p>
				<p className="idk">?</p>
			</div>
		}
		if(mime == 'application/pdf') {
			return <embed src={url} type={mime} className="standaloneMultimedia"></embed>
		}
		return <div>
			<p>MIME {mime} type not understood</p>
			<p className="idk">?</p>
		</div>
	}
	reloadPreview = () => {
		if(this.props.post.hasPreview) {
			console.log('reloading preview')
			state.ws.sendRpc('getPreview', {
				group: state.currentGroup.id,
				post: this.props.post.id
			})
			.then((res) => {
				if(Object.keys(res.result).length > 0) {
					this.setState({preview: res.result})
				}
				else {
					this.setState({preview: undefined})
				}
			})
			.catch(console.error)
		}
	}
}