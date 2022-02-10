import {applyMiddleware, combineReducers, createStore} from 'redux';
import postsReducer from './pages/posts/postsReducer';
import postDetailsReducer from './pages/postDetails/postDetailsReducer'
import thunk from 'redux-thunk';
const composeEnhancers =
   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    })

const enhancer = composeEnhancers(
  applyMiddleware(thunk),
  // other store enhancers if any
);
const store= createStore(combineReducers({postsReducer, postDetailsReducer}),enhancer);
export default store;