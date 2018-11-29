import * as types from './actionTypes'
import axios from 'axios'
const qs = require('querystring');

const actionCreator = {
    getListAsync(){
        return {
            type: types.GET_LIST_ASYNC,
            payload:axios.post('/migu/lovev/miguMovie/data/seeFilmData.jsp',
            qs.stringify({
                nodeId: 70022794, 
                pagesize: 3,
                pageidx: 1
            })
            // 'nodeId=70022794&pagesize=3&pageidx=1'
            )
        }
    },
    
    getIsShowing(){
        return{
            type:types.GET_ISSHOWING_LIST,
            payload:axios({
                url:'/migu/publish/i_www/resource/lovev/miguMovie/data/indexFilm_data.jsp',
                method:'post',
                data:qs.stringify({
                    cityCode: 4751
                })
            })
        }
    },

    getSoonShowing(){
        return{
            type:types.GET_SOONSHOWING_LIST,
            payload:axios({
                url:'/migu/publish/i_www/resource/lovev/miguMovie/data/indexFilmComing_data.jsp',
                method:'post',
                data:qs.stringify({
                    cityCode: 4751
                })
            })
        }
    },

    getCinemasList(){
        return{
            type:types.GET_CINEMAS_LIST,
            payload:axios({
                url:'/migu/mta-service/data/migu/validCinemaes.jsp',
                method:'post',
                data:qs.stringify({
                    cityCode: 4751,
                    orderType: 1,
                    longitude: '',
                    latitude: ''
                })
            })
        }
    }
    
}

export default actionCreator