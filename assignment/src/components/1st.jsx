import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  return (
    <div>
      <h2>
        useEffect runs on every render. That means that when the count changes,
        a render happens, which then triggers another effect.
      </h2>
      <h4>
        So Here, You can see the everyTime the component render the value is
        change making the counter run infinite loop.
      </h4>

      <h3>
        1st example.<br></br>
        <hr></hr>
      </h3>
      <p>I've rendered {count} times!</p>
    </div>
  );
}

export default Timer;
