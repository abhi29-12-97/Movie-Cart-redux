import React from 'react';
import {createStore} from 'redux';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './component/App';
import rootReducer from './reducers';

const store = createStore(rootReducer);
// console.log('before state',store.getState());

// store.dispatch({
//   type:'ADD_MOVIES',
//   movies:[{name:'SuperMan'}]
// })
// console.log('After state',store.getState());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store={store}/>
  </React.StrictMode>
);

