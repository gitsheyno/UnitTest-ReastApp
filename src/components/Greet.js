import React, { useState } from "react";

const Greet = () => {
  const [changedText, setChangedText] = useState(false);
  const changeTextHandler = () => {
    setChangedText(true);
  };
  return (
    <div>
      {!changedText && <h1>greeting page</h1>}
      {changedText && <p>my name is shayan</p>}
      <button onClick={changeTextHandler}>Change Text!</button>
    </div>
  );
};

export default Greet;
