import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function arttir(params) {
    console.log(params);
    setCount(count + 1);
  }

  function azalt() {
    if (count === 0) {
      return;
    }
    setCount(count - 1);
  }

  return (
    <div className="counter">
      <button onClick={()=> arttir("+")}>+</button>
      <strong>{count}</strong>
      <button onClick={()=> azalt("-")}>-</button>
    </div>
  );
}

export default Counter;