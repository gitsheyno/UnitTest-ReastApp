import React, { useState } from "react";
import OutPut from "./OutPut";
const Greet = () => {
  const [changedText, setChangedText] = useState(false);
  const changeTextHandler = () => {
    setChangedText(true);
  };
  return (
    <div>
      {!changedText && <h1>greeting page</h1>}
      {changedText && <OutPut>my name is shayan</OutPut>}
      <button onClick={changeTextHandler}>Change Text!</button>
    </div>
  );
};

export default Greet;
