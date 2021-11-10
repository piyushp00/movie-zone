//packages
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

//local files
import './index.css';
import App from './components/App';
import movies from './reducers' 

//create store(by redux)
const store = createStore(movies);
console.log('store', store);
// console.log('BEFORE STATE', store.getState());

// //dispatching action
// store.dispatch({
//   type: 'ADD_MOVIES',
//   movies : [{name: 'Superman'}]
// });

// console.log('AFTER STATE', store.getState());


ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);



