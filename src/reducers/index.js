import { combineReducers } from 'redux';
import PostsReducer from './posts_reducer';
const rootReducer = combineReducers({
    posts:PostsReducer
    //state: (state = {}) => state
});

export default rootReducer;
