import {combineReducers} from 'redux'
import getvideo from './getvideo'
import videos from './videos'
var rootreducer = combineReducers({
item:getvideo,
video:videos




})
export default rootreducer
