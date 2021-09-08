import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers/rootReducers';

const persistConfig = {
  key: 'fvaly',
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleware = applyMiddleware(ReduxThunk);
const store = createStore(persistedReducer, composeWithDevTools(middleware));
export const persistor = persistStore(store);
export default store;
