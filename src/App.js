import logo from "./logo.svg";
import "./App.css";
import CircleButton from "./ui-kit/CircleButton";
import React, { useState } from "react";
import LoadingIndicator from "./ui-kit/LoadingIndicator";

function App() {
  const [button1, setButton1] = useState(false);
  const [button2, setButton2] = useState(false);
  const [button3, setButton3] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("#ffffff");

  const handleButtonClick = (color) => {
    setButton1(color !== "red");
    setButton2(color !== "blue");
    setButton3(color !== "green");

    if (color === "red") {
      setBackgroundColor("#ff0000");
    } else if (color === "blue") {
      setBackgroundColor("#0000ff");
    } else if (color === "green") {
      setBackgroundColor("#00ff00");
    }

    setTimeout(() => {
      setBackgroundColor("#ffffff");
      setButton1(false);
      setButton1(false);
      setButton1(false);
    }, 1000);
  };
  return (
    <div style={{ backgroundColor }}>
      <div className="buttons">
        <CircleButton
          color="red"
          onClick={() => handleButtonClick("red")}
          disabled={button1}
          backgroundColor={backgroundColor}
        >
          Click
        </CircleButton>
        <CircleButton
          color="blue"
          onClick={() => handleButtonClick("blue")}
          disabled={button2}
          backgroundColor={backgroundColor}
        >
          Click
        </CircleButton>
        <CircleButton
          color="green"
          onClick={() => handleButtonClick("green")}
          disabled={button3}
          backgroundColor={backgroundColor}
        >
          Click
        </CircleButton>
      </div>
      <LoadingIndicator />
    </div>
  );
}

export default App;
