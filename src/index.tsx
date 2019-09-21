require("@babel/polyfill")
import 'antd/dist/antd.css'
import Root from "./Root";
import * as React from 'react'
import * as ReactDOM from 'react-dom'

ReactDOM.render(<Root />, document.querySelector('#app'))