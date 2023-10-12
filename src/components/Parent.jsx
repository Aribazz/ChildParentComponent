import React, { useState } from "react";
import Child from "./Child";
function Parent() {
  const [message, setMessag] = useState("Hello World");
  function chooseMessage() {
    setMessag("From Child Clicked to Parent");
  }
  return (
    <div>
      <p>{message}</p>
      <Child chooseMessage={chooseMessage} />
    </div>
  );
}
export default Parent;
