import * as React from 'react'
import { observer } from 'mobx-react'
import { state } from './AppState'
import LoginPage from './LoginPage/LoginPage'
import MainPage from './MainPage/MainPage'

@observer
export default class Root extends React.Component<{}, {}> {
	constructor(props) {
		super(props)
	}
	render () {
		return (
			<div className="centerWrapper">
				{
					state.loggedIn ?
					<MainPage /> :
					<LoginPage />
				}
			</div>
		)
	}
}