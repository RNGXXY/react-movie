
import default_state from './defaultState'
import * as types from './actionTypes'

import actionCreators from './actionCreators'

// 给connect添加可以配置的actionCreators
import {connect} from 'murlin-connect'
connect.addActionCreator({ 
    watchMovies:actionCreators
})

const reducer = (
    previous_state = default_state,
    action
)=>{
    let new_state = Object.assign({},previous_state)
    switch(action.type){
        case types.GET_LIST_ASYNC + '_FULFILLED' :
            new_state.watchMovieList = action.payload.data; break
        case types.GET_ISSHOWING_LIST + '_FULFILLED' :
            new_state.isShowingList = action.payload.data; break 
        case types.GET_SOONSHOWING_LIST + '_FULFILLED' :
            new_state.soonShowingList = action.payload.data; break 
        case types.GET_CINEMAS_LIST + '_FULFILLED' :
            new_state.cinemasList = action.payload.data; break
            break
        default : return previous_state
    }
    return new_state   
}

export default reducer