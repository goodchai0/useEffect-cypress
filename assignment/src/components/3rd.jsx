import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); // <- add the count variable here

  return (
    <>
      <h3>
        3rd example.<br></br>
        <hr></hr>
      </h3>
      <h4>
        Here is an example of a useEffect Hook that is dependent on a variable.
        If the count variable updates, the effect will run again:
      </h4>

      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <button onClick={() => setCount((c) => c - 1)}>-</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}

export default Counter;
