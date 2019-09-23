import { Form, Icon, Input, Button, Checkbox } from 'antd'
import {FormComponentProps} from 'antd/lib/form/Form'
import * as React from 'react'
import { observer } from 'mobx-react'
import './LoginPage.css'
import { appStore } from '../stores';

@observer
export default class LoginPage extends React.Component<{}, {
	server: string
}> {
	constructor(props) {
		super(props)
		this.state = {
			server: ''
		}
		if(!(window as any).onSignIn) {
			;(window as any).onSignIn = (googleUser) => {
				const profile = googleUser.getBasicProfile()
				const token = googleUser.getAuthResponse().id_token
				//console.log('ID Token: ',token)
				appStore.login([token], this.state.server, profile.getName())
			}
		}
	}
	render() {
		return (
			<div className="loginForm">
				<div className="g-signin2" data-onsuccess="onSignIn"></div>
				<p>Select a server (or use the default)</p>
				<Input 
					placeholder="server" 
					defaultValue="" 
					value={this.state.server} 
					onChange={(e) => this.setState({server: e.target.value})} />
				<h1>WARNING: DATA IS NOT ENCRYPTED</h1>
			</div>
		);
	}
}