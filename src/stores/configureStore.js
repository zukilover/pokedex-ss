/**
 * Created by herisetiawan on 2/16/17.
 */
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducers';
import thunk from 'redux-thunk';

export default function configureStore() {
  return createStore(
    rootReducer,
    applyMiddleware(thunk)
  );
}
