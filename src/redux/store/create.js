import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import countReducer from './reducers/countReducer';

const appReducers = combineReducers({
  countReducer,
});

const store = createStore(appReducers, composeWithDevTools(applyMiddleware()));

export default store;
