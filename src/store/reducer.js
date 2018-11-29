import { combineReducers } from 'redux'
import watchMovies from './watchMovies'
import detail from './detail'

export default combineReducers({
    watchMovies,
    detail
})