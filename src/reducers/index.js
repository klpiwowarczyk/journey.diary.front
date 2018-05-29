import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import posts from './posts.reducers';

const reducers = {
    routing: routerReducer,
    posts,
};

export default combineReducers(reducers);
