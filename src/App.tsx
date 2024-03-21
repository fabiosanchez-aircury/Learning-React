import { useState } from "react";
import Demo from "./components/10-Fetching_Data";


function App(){
  const [isVisible, changeVisibility] = useState(false);

  return (
    <>
      <Demo></Demo>
    </>
  )
}

export default App;