import counterReducer from './counter';
// We can give any name bc 'export default'
import loggedReducer from './isLogged';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    // ES6 Syntactic Sugar Version
    // counterReducer,
    // loggedReducer
    counter: counterReducer,
    isLogged: loggedReducer
})


export default allReducers;