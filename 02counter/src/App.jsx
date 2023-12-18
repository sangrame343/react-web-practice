import { useState } from "react";

import "./App.css";

function App() {
 
  const [counter, setCounter] = useState(0);
  const addValue = () => {
    setCounter(counter + 1);
    if (counter == 10) {
      setCounter(10);
    }
  }
  const subValue = () => {
    setCounter(counter - 1);
    if (counter < 0) {
      setCounter(0);
    }
  }
  return (
   <>
   <h1>React Counter</h1>
   <h2>Count:{counter}</h2>
   <button type="button" onClick={addValue}>Increment</button>
   <br />
   <button type="button" onClick={subValue}>Decrement</button>
   </>
  );
}

export default App;
