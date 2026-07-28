import './App.css'
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const addValue = () => {
    console.log("clicked",{count})
    setCount(count + 1);
  };
  const removeValue = () => {
    if(count < 1){
      return console.error();
      
    }
    else{
      console.log("clicked",{count})
    setCount(count - 1 );
    }
    
  };

  return (
    <>
      <h2>Counter value: {count}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}
export default App;