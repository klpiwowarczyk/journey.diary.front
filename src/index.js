import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AppContainer from './AppContainer';
import Page from './routes/dashboard/Page';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, hashHistory } from 'react-router';
import PostsListContainer from './routes/posts/PostsListContainer';
import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import {routerMiddleware} from "react-router-redux";
import {Provider} from "react-redux";

import reducers from './reducers';
import 'react-sticky-header/styles.css';

const middleware = routerMiddleware(hashHistory);
const store = createStore(
    reducers,
    applyMiddleware(
	thunkMiddleware,
        middleware
    )
);

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route  component={AppContainer}>
                <Route path="/" component={PostsListContainer}/>
               {/* <Route path="/" component={Page}/>*/}
            </Route>
        </Router>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();


/*
render((
    <Router history={hashHistory}>
        <Route path="/" component={App}/>
    </Router>
), document.getElementById('app'))*/
