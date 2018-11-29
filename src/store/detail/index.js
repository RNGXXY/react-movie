import default_state from './defaultState'

import actionCreators from './actionCreators'
import * as types from './actionTypes'


// 给connect添加可以配置的actionCreators
import {connect} from 'murlin-connect'
connect.addActionCreator({
    detail:actionCreators
})

const reducer = (
    previous_srate = default_state , action
)=>{
    let new_state = Object.assign({},previous_srate)
    switch(action.type){
        case types.GET_RECOMMEND_DATA+'_FULFILLED':
            new_state.recommendList = action.payload.data
            break
        default : return previous_srate
    } 
    return new_state
}

export default reducer