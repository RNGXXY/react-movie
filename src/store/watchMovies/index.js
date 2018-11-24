
import default_state from './defaultState'
import * as types from './actionTypes'

import actionCreators from './actionCreators'

// 给connect添加可以配置的actionCreators
import connect from '@Connect'
connect.addActions({
    watchMovies:actionCreators
})

const reducer = (
    previous_state = default_state,
    action
)=>{
    let new_state = Object.assign({},previous_state)
    switch(action.type){
        case types.GET_LIST_ASYNC + '_FULFILLED' :
            new_state = action.payload.data; break
        default : return previous_state
    }
    return new_state   
}

export default reducer