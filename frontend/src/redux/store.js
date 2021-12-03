import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger/src';
import {auth} from "./auth";
import { profile } from './profile'
import { comparis } from './comparis'
import { education } from './education'

const logger = createLogger({
  diff: true,
  collapsed: true,
});

const rootReducer = combineReducers({
  auth: auth,
  profile: profile,
  comparis: comparis,
  education: education,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;