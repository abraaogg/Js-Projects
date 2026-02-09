import { useState, useEffect } from "react";

function Effect() {
  const [count, setCount] = useState(0);
  const add = () => {
    setCount(count + 1);
  };
  useEffect(() => {
    console.log("mounted")
  }, []);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={add}>+</button>
    </div>
  );
}

export default Effect;
