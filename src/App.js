import './App.css';
import {React,useState } from 'react'

let Money=1000000;
let CartP=0;
const chaiP=10;

function App() {

 
  const [counter, setCounter] = useState(0);
  const increase = ()=>{
    setCounter( count => count+1);
    Money -=chaiP;
    CartP +=chaiP;
  };
  const decrease = ()=>{
    if(counter>0){
    setCounter( count => count-1);
    Money +=chaiP;
    CartP -=chaiP;
  }
  };

  

  
  return (
    <div>
      <p>Ambani's Money= {Money}</p>
    <div className='card'>
      
      <p>Chai</p>
      <p>{chaiP}</p>

      <p></p>
      <button className="control__btn" onClick={decrease}>-</button>
      <input type='number' value={counter} min={0}/>
      <button className="control__btn" onClick={increase}>+</button>
      <p>Cart total={CartP}</p>
    </div>
    </div>
  );
}

export default App;
