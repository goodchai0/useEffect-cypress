import { useState, useEffect } from "react";

function Timer2() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []); // <- add empty brackets here

  return (
    <div>
      <h3>
        2nd example.<br></br>
        <hr></hr>
      </h3>
      <h4>
        So Here, You can see the component render only one time because of the
        empty array in 2nd paramenter in useEffect .
      </h4>

      <p>I've rendered {count} times!</p>
    </div>
  );
}

export default Timer2;
