import React, {useState} from "react";

function Toggle() {
  // STates
  const [isOn, setIsOn] = useState(false);

  // Event Handlers
  function handleOnClick(){
    setIsOn(!isOn);
  }
  console.log(isOn)
  const color = !isOn ? "red" : "green";

  // Component Return
  return <button style={{background : color}} onClick={handleOnClick}>{isOn ? "ON" : "OFF"}</button>;
}

export default Toggle;
