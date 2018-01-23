/*
 * router.js
 **/

import React,{ Component } from 'react'
import { connect } from 'react-redux'
import {
    BrowserRouter as Router, Route,
} from 'react-router-dom'

import Home from './home'

class BasicRouter extends Component{
    render(){
	return(
		<Router>
		<Route exact path='/' component={ Home } />
		</Router>
	)
    }
}

const mapStateToProps = state => ({
    home: state.home
})

export default connect(mapStateToProps)(BasicRouter)
