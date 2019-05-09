
import default_state from './defaultState'
import * as types from './actionTypes'
import actionCreators from './actionCreators'
// 给connect添加可以配置的actionCreators
import {connect} from 'murlin-connect'

const qs = require('querystring');

connect.addActionCreator({ 
    sign:actionCreators
})

const reducer = (
    previous_state = default_state,
    action
)=>{
    let new_state = Object.assign({},previous_state)
    switch(action.type){
        case types.GET_USERINFO + '_FULFILLED' :
            if(action.payload.data.code==200)
            new_state.userInfo = action.payload.data.data; break
        case types.EXIT_SIGN :
            new_state.userInfo = action.payload.data; break
        default : return previous_state
    }
    return new_state   
}

export default reducer