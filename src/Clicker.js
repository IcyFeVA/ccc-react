import React, { useState } from "react";

function ClickCounter({ startAt }) {
  const [count, updateCount] = useState(startAt);

  function clickHandler() {
    updateCount(count + 1);
  }

  return (
    <div>
      <button onClick={clickHandler}>Click me</button>
      <p>You have clicked the button {count} times</p>
    </div>
  );
}

export default ClickCounter;
