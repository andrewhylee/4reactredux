import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { increment, decrement } from './actions/index';

function App() {
  const counter = useSelector(state => state.counter)
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter : {counter}</h1>
      <button onClick={()=>{dispatch( increment(15) ) }}>+</button>
      <button onClick={()=>dispatch( decrement() ) }>-</button>


      {isLogged ? <h2>Some secret information that I shouldn't see if im not logged in.</h2> : <h2>Nuthing.</h2>  }

    </div>
  );
}

export default App;
