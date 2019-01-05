import {createStore, applyMiddleware} from 'redux';

import logger from 'redux-logger';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';
import rootReducer from 'reducers';

// const middleware = applyMiddleware(logger, thunk, promise());

export default createStore(
  rootReducer,
  applyMiddleware(logger, thunk, promise()));
