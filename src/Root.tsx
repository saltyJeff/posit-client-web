import * as React from 'react'
import { observer } from 'mobx-react'
import LoginPage from './LoginPage/LoginPage'
import MainPage from './MainPage/MainPage'
import { groupStore, appStore } from './stores';

@observer
export default class Root extends React.Component<{}, {}> {
	constructor(props) {
		super(props)
	}
	render () {
		return (
			<div className="centerWrapper">
				{
					appStore.loggedIn ?
					<MainPage /> :
					<LoginPage />
				}
			</div>
		)
	}
}