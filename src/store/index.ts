import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import UserReducer from './user/reducer'
import RouteReducer from './route/reducer'
import NotPersistenceReducer from './notPersistence/reducer'
import ConfigReducer from './config/reducer'
import thunk from 'redux-thunk'
const reducer = combineReducers({
  user: UserReducer,
  route: RouteReducer,
  notPersistence: NotPersistenceReducer,
  config: ConfigReducer
})
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'route', 'config'] // 白名单
}

const myReducer = persistReducer(persistConfig, reducer)

const store = createStore(
  myReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

const persistor = persistStore(store)
export { store, persistor }
