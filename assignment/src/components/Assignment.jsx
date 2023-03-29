import { useState, useEffect } from "react";

function Counter2() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, []); // <- add the count variable here

  return (
    <>
      <hr></hr>
      <h3>Assignment-Question:</h3>
      <p>
        In the 3rd example, When the "+" & "-" buttons are click the values of
        count as well as Calculation are getting changed. But value of
        Calculation is not changing here.
        <br />
        Make the changes such the it set the value of changes Calculation here
        too.
      </p>

      <p>Count: {count}</p>
      <button data-cy="increment" onClick={() => setCount((c) => c + 1)}>
        +
      </button>
      <button data-cy="decrement" onClick={() => setCount((c) => c - 1)}>
        -
      </button>
      <p>
        Calculation: <span data-cy="cal-value">{calculation}</span>
      </p>

      <br />
      <br />
      <h3>Answer:</h3>
      <p>
        <br />
        The second argument to useEffect is an array of dependencies . If you
        want to control when effect is to be executed after mounting the
        component, then pass an array of dependencies as the second argument.
        dependencies are values defined outside useEffect but are being used
        inside useEffect. React compares the current value of dependency and the
        value on previous render. If they are not the same, effect is invoked.
        For this particular problem just pass the "Count" as the second second
        argument and cypress will pass the test case.
      </p>
    </>
  );
}

export default Counter2;
