import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';

import reducers from '../reducers';


const Store = createStore(reducers, applyMiddleware(
  promise,
  thunk,
  // logger,
));

export default Store;
