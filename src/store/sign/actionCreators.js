import * as types from './actionTypes'

const actionCreator = {
    getUserInfo(userInfo){
        return {
            type: types.GET_USERINFO,
            payload:userInfo
        }
    },
    
    
}

export default actionCreator