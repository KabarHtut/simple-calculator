import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import Output from './components/Output';

function App() {
  const [ output, setOutputValue ] = useState(0);
  const [ input, setInputValue ] = useState(0);

  function clickEventHandling(value) {
    if(value == "C") {
      setInputValue(0);
      setOutputValue(0);
    }else if (value == "<") {
      if(input.length != 0){
        input.length == 1 ? setInputValue(input) : setInputValue(input.slice(0, input.length - 1));
      }
    }else if (value == "=") {
      setOutputValue(eval(input));
      setInputValue(0);
    }else {
      input == 0 ? setInputValue(value) : setInputValue(input + value); 
    }
    
  }
  return (
    <div className="container">
      <div className="calculator_frame">
        <Output output={output}/>
        <Input input={input}/>
        <Button clickEventHandling={clickEventHandling}/>
      </div>
    </div>
  );
}

export default App;
