import { combineReducers } from 'redux'
import watchMovies from './watchMovies'
import detail from './detail'
import sign from './sign'

export default combineReducers({
    watchMovies,
    detail,
    sign
})