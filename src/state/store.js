import {
  createStore,
  compose,
  applyMiddleware
} from 'redux'
import { createLogger } from 'redux-logger';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk'
import reducers from './reducers'

const middleware = applyMiddleware(promise(), thunk, createLogger());

const store = createStore(
  reducers,
  middleware
);

export default store
