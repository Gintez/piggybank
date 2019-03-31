import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';

import api from 'api/api';
import createRootReducer from './root-reducer';

export function configureStore (history) {
  const historyMiddleware = routerMiddleware(history);
  const thunkMiddleware = thunk.withExtraArgument({ api, history });
  const mainMiddleware = composeWithDevTools(applyMiddleware(thunkMiddleware, historyMiddleware));

  return createStore(createRootReducer(history), {}, mainMiddleware);
}
