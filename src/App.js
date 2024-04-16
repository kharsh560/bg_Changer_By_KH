import { useState } from "react";
import ColorChanger from "./components/ColorChanger";

function App() {
  // const color = "gray";
  let [color, setColor] = useState("#00FFFF");

  function changeColor(newColor) {
    setColor((color = newColor));
  }

  return (
    <div
      className=" w-full h-screen flex justify-center items-center"
      style={{ backgroundColor: color }}
    >
      {/* [import './index.css'] was missing from index.js and hence tailwind wasn't working! */}
      {/* Actually I removed it while cleaning the files ans folders! */}
      {/* Note: One trick to find if tailwind is being applied or not, is to check if 
      the <h1> tag does its job or not! Bcoz with tailwind, the basic changes made by tags
      is not applied!!  */}
      <div className=" text-white h-[60px] w-[700px] bg-slate-700 rounded-3xl flex justify-around items-center shadow-md">
        {/* <div className=" flex items-center">
          <p>Red</p>
        </div> */}
        {/* Using React's "Props" */}
        <ColorChanger
          colorHex="#FFC0CB"
          colorName="Pink"
          // these upper two values, is the data from backend!!
          changeColorFxn={changeColor}
        />
        <ColorChanger
          colorHex="#FF0000"
          colorName="Red"
          changeColorFxn={changeColor}
        />
        <ColorChanger
          colorHex="#000000"
          colorName="Black"
          changeColorFxn={changeColor}
        />
        <ColorChanger
          colorHex="#0000FF"
          colorName="Blue"
          changeColorFxn={changeColor}
        />
        <ColorChanger
          colorHex="#00FF00"
          colorName="Green"
          changeColorFxn={changeColor}
        />
      </div>
    </div>
  );
}

export default App;
