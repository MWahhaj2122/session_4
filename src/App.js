import React, {useState} from 'react';
import './App.css';
import Message from './Messge';

function App(props) { 
  let[count ,setCount] = useState(0);
  let[isMorning,setMorning] = useState(true);
  return (
    <div className = {`box ${isMorning ? 'daylight' : '' }`} >

      <h4> Good {isMorning ? 'Morning':'Night'}</h4>

      <Message counter ={count}/>
      
      <button onClick =
      {
        ()=> setCount(++count)
      }
      > Updated count</button>
      <button
      onClick = {
        ()=> setMorning(!isMorning )
      }
      >Updated Day</button>
    </div>
  );

}

export default App;
