import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  return (
    <center>
      <h1>Tally Counter</h1>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <h1>{message}</h1>
      <input
        type="text"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
      />
    </center>
  );
};

export default Counter;
