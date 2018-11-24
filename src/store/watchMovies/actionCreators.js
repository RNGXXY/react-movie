import * as types from './actionTypes'
import axios from 'axios'

const actionCreator = {
    getListAsync(){
        return {
            type: types.GET_LIST_ASYNC,
            payload:axios.post('/migu/lovev/miguMovie/data/seeFilmData.jsp',
            'nodeId=70022794&pagesize=3&pageidx=1')
        }
    }
}

export default actionCreator