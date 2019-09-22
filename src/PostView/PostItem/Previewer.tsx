import * as React from 'react'
import { Preview } from 'posit-core';

interface Props {
	preview: Preview
	viewMore: boolean
}
export default class Previewer extends React.Component<Props, {}> {
	constructor(props) {
		super(props)
	}
	render () {
		const preview = this.props.preview
		return (
			<div style={{overflowY: this.props.viewMore ? 'auto' : 'hidden', width: '100%', height: '100%'}}>
				{!!preview.title && <h3>{preview.title}</h3>}
				{this.renderPreview()}
				{this.renderTitle()}
				{this.props.viewMore && !!preview.description && <pre style={{whiteSpace: 'pre-wrap'}}><p>{preview.description}</p></pre>}
			</div>
		)
	}
	renderTitle = (): JSX.Element => {
		const prev = this.props.preview
		if(!!prev.author && !!prev.logo) {
			return <p className="secondTitle">{prev.author} - <img src={prev.logo}/></p>
		}
		else if(!!prev.author) {
			return <p className="secondTitle">{prev.author}</p>
		}
		else if(!!prev.logo) {
			return <p className="secondTitle"><img src={prev.logo}/></p>
		}
		return <></>
	}
	renderPreview = (): JSX.Element => {
		const prev = this.props.preview
		if(!!prev.frame && this.props.viewMore) {
			return <iframe 
				src={prev.frame} 
				allowFullScreen
				className={!prev.author && !prev.logo ? "standaloneMultimedia" : "multimedia"}>
			</iframe>
		}
		if(!!prev.video) {
			return <video src={prev.video} className="multimedia"></video>
		}
		if(!!prev.audio) {
			return <audio src={prev.audio} className="multimedia"></audio>
		}
		if(!!prev.image) {
			return <img src={prev.image} className="multimedia"></img>
		}
		return <p>No preview available</p>
	}
}