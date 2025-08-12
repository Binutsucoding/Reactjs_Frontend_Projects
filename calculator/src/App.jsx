import { useState } from "react";
import styles from "./App.module.css";
import Buttons from "./Components/Buttons";
import Display from "./Components/Display";

function App() {
  let [calVal, setCalVal] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      setCalVal(eval(calVal));
    } else {
      setCalVal(calVal + buttonText);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display disCalVal={calVal} />

      <Buttons handleButtonClick={onButtonClick} />
    </div>
  );
}

export default App;
