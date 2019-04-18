import * as types from './actionTypes'
import axios from 'axios'
const actionCreator = {
    getUserInfo(userInfo){
        return {
            type: types.GET_USERINFO,
            payload:axios({ 
                method: 'post',
                url:'/cms/userList/sign',
                data:{
                    add:{
                        userPhone:userInfo.phoneNum
                    }
                }
            })
        }
    },
    
    
}

export default actionCreator