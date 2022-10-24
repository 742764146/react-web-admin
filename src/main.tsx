import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import 'normalize.css/normalize.css'
// import "antd/dist/antd.less";
import 'antd/dist/antd.variable.min.css';
import "@/assets/iconfont/iconfont.less";
import { store, persistor } from './store'
ReactDOM.createRoot(
  document.getElementById('root')!
).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
