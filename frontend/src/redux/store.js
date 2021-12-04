import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger/src';
import auth from "../redux/reducers/auth";
import { comparis } from './comparis'
import { education } from './education'
import message from '../redux/reducers/message'
import { quadroReducer } from './reducers/slider'
import { composeWithDevTools } from 'redux-devtools-extension'
import { courseReduce } from './reducers/course'
import { comparisReduces } from './reducers/comparis'
import { selectReducer } from './reducers/select'

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const rootReducer = combineReducers({
  auth: auth,
  message: message,
  comparis: comparis,
  education: education,
  quadroReducer: quadroReducer,
  courseReduce: courseReduce,
  comparisReduces: comparisReduces,
  selectReducer: selectReducer
});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, logger)));

export default store;