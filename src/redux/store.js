import reducer from './reducer';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';

export default createStore(reducer, applyMiddleware(promiseMiddleware))

//if we had more reducers, the store would be a little diff (root reducer), but we just have one for this app