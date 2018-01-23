/*
 * home reducer
 */

import { combineReducers } from 'redux'

const lang = ( state = "CN", action ) =>{
    switch(action.type){
    case "CN":
	return "CN"
    case "EN":
	return "EN"
    default:
	return state
    }
}

const home = combineReducers({
    lang
})

export default home
