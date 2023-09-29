import React, { useState } from "react";

function EyesOnMe() {
  const [Focused, setFocused] = useState(false);

  const Focus = () => {
    console.log("Good!");
    setFocused(true);
  };

  const Blur = () => {
    console.log("Hey! Eyes on me!");
    setFocused(false);
  };

  return (
    <button onFocus={Focus} onBlur={Blur}>
      Eyes on me
    </button>
  );
}

export default EyesOnMe;
