import { useState } from "react";

export default function App() {
  
  const [count, setCount] = useState(0);
  function handlePlusClick() {
    setCount(num => num + 1);
  }
  function handleMinusClick() {
    setCount(num => num - 1);
  }

  return (
    <>
     <div>
      <h1>{count}</h1>
      <button onClick={handlePlusClick}>+1</button>
      <button onClick={handleMinusClick}>-1</button>
     </div>
    </>
  );
}