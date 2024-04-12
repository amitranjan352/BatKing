import React, { useState } from "react";
import CircleButton from "./CircleButton";

function DisableThings() {
  const [button1, setButton1] = useState(false);
  const [button2, setButton2] = useState(false);
  const [button3, setButton3] = useState(false);

  const handleButtonClick = (clicked) => {
    if (clicked === "button1") {
      setButton2(true);
      setButton3(true);
    } else if (clicked === "button2") {
      setButton1(true);
      setButton3(true);
    } else if (clicked === "button3") {
      setButton1(true);
      setButton2(true);
    }
  };
  return (
    <>
      <CircleButton
        color="#ff0000"
        onClick={() => handleButtonClick("button1")}
        disabled={button1}
      >
        Butttton1
      </CircleButton>
      <CircleButton
        color="00ff00"
        onClick={() => handleButtonClick("button2")}
        disabled={button2}
      >
        Butttton1
      </CircleButton>
      <CircleButton
        color="#0000ff"
        onClick={() => handleButtonClick("button3")}
        disabled={button3}
      >
        Butttton1
      </CircleButton>
    </>
  );
}

export default DisableThings;
