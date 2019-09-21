import { Form, Icon, Input, Button, Checkbox } from 'antd'
import {FormComponentProps} from 'antd/lib/form/Form'
import * as React from 'react'
import { observer } from 'mobx-react'
import { state } from '../AppState';
import './LoginPage.css'

@observer
export default class LoginPage extends React.Component<{}, {
	server: string
}> {
	constructor(props) {
		super(props)
		this.state = {
			server: ':2468'
		}
		if(!(window as any).onSignIn) {
			;(window as any).onSignIn = (googleUser) => {
				const profile = googleUser.getBasicProfile()
				const token = googleUser.getAuthResponse().id_token
				//console.log('ID Token: ',token)
				state.login([token], this.state.server, profile.getName())
			}
		}
	}
	render() {
		return (
			<div>
				<div className="g-signin2" data-onsuccess="onSignIn"></div>
				<p>Select a server (or use the default)</p>
				<Input placeholder="server" defaultValue=":2468" value={this.state.server} onChange={(e) => this.setState({server: e.target.value})} />
				<h1>WARNING: DATA IS NOT ENCRYPTED</h1>
			</div>
		);
	}
}