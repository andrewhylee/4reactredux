import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import allReducers from './reducers/index'
// Connects our Store to our App
import { Provider } from 'react-redux';

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


// We can't give multiple reducers to store at once.
// We have to combine reducers first.
// const store = createStore(counterReducer, isLoggedReducer)







//---------------WHEN YOU HAVE ONE SIMPLE REDUCER IMPLEMENTATION -----------------//
// //let store = createStore(reducer)


// //STORE -> Gloabalized State

// //ACTION Increment [Describes what you wanna do]
// //-----Just a function that returns an object
// const increment = () => {
//   return {
//     // type is basically just the name of the action
//     type: 'INCREMENT',
//   }
// }
// const decrement = () => {
//   return {
//     type: 'DECREMENT',
//   }
// }


// //REDUCER: How your actions changes the store [Checks which action you did and modifies the store accordingly]

// const counter = (state = 0, action) => {
//   switch(action.type){
//     case "INCREMENT":
//       return state+1;
//     case "DECREMENT":
//       return state-1;
//   }
// }

// let store = createStore(counter); //counter is the reducer

// //Display it in the console
// store.subscribe(() => console.log(store.getState() ));


// //DISPATCH: Sends the action to reducer so it can know what to do and then change the store. [How we can actually execute the action]
// store.dispatch(increment() );
// store.dispatch(decrement() );
// store.dispatch(decrement() );




ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
