
import { useState } from 'react';
import text from './Data';
import './App.css';

function App() {

  const [index, setIndex] = useState(0)
  const [texts, setText] = useState('')

  const onChangeHandler = (e) => {
    const val = e.target.value
    setIndex(val)
  }

  const btnHandler = () => {
    setText( text.slice(0,index*20))
    
  }

  return (
    <div className='app'>
      <h2>TIRED OF BORING LOREM IPSUM?</h2>
      <p>Paragraphs : </p>
      <input type="number" onChange={onChangeHandler} value={index}/>
      <button onClick={btnHandler}>GENERATE</button>
      <br />
      <p className='text'>{texts}</p>
    </div>
  );
}

export default App;
