import * as types from './actionTypes'
import axios from 'axios'
const actionCreators = {
    geRecommendlData(){
        return{
            type:types.GET_RECOMMEND_DATA,
            payload:axios({ 
                url:'/migu/publish/i_www/resource/lovev/miguMovie/detail/relevant_data2.jsp',
            })
        }
    }
}

export default actionCreators