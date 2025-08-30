import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import { useState } from "react";


function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick =  (buttonText) => {
    if (buttonText === "c"){
      setCalVal("");

    }else if (buttonText == "="){
      const result = eval(calVal);
      setCalVal(result);

    }else{

      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);

    }

  }

  return (
    <div className={styles.calculator} id="ank">
      <Display displaycalVal={calVal}></Display>
      <ButtonContainer
        onButtonClick={onButtonClick}
      ></ButtonContainer>
    </div>
  );
}

export default App;
