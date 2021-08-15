import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import App from './App';
import s from './redux/store'
import {Provider} from 'react-redux'

console.log(s.store);
console.log(s.store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={s.store}>
    <PersistGate loading={null} persistor={s.persistor}>
      <BrowserRouter>
    <App />
    </BrowserRouter>
    </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


