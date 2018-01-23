/*
 * init.js
 * contributor: mercurio 
 * email: udtrokia@163.com
 */

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './containers'
import registerServiceWorker from './registerServiceWorker.js'
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import './index.css'

const theme = createMuiTheme();
const store = createStore(todoApp)

render(
	<Provider store={ store } >
	<MuiThemeProvider theme={ theme } >
	<App />
	</MuiThemeProvider>
	</Provider>,
  document.getElementById('root')
)

registerServiceWorker();
