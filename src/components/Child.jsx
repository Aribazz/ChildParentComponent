import React from "react";

function Child({ chooseMessage }) {
  return (
    <div>
      <button onClick={() => chooseMessage()}>Clear all.</button>
    </div>
  );
}
export default Child;
