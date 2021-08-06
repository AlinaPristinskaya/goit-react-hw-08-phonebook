import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store,persistor} from './redux/store'
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

console.log(store);
console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <App />
    </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


