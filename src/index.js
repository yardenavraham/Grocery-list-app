import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import appStore from './redux/store';
import throttle from 'lodash/throttle';
import {saveState} from './localStorage/localStorage';

appStore.subscribe(throttle(() => {
    saveState({
      items: appStore.getState().items
    });
  }, 1000));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={appStore}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();