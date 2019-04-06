import * as types from './actionTypes'

const actionCreator = {
    handleOrderList(order){
        return {
            type: types.GET_ORDERLIST,
            payload:order
        }
    },
    
    
}

export default actionCreator