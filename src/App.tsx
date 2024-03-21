import { useState } from "react";
import Alert from "./components/7-Children";
import Button from "./components/8-Exercise_Buttons";
import AlertButton from "./components/9-Exercise_Alert";


function App(){
  /* return (
    <div>
      <Alert>Alert <span>span text</span> </Alert>
    </div>
  ) */

  /* return (
    <div>
      <Button className="success" onClickBtn={() => console.log("Pulsaste el botón")}>Example Button</Button>
    </div>
  ) */

  const [isVisible, changeVisibility] = useState(false);


  return (
    <>
      {isVisible && <AlertButton onClose={() => changeVisibility(false)}></AlertButton>}
      <Button className="success" onClickBtn={() => changeVisibility(true)}>Example Button</Button>
    </>
  )
}

export default App;