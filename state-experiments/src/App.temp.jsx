import { createContext, useState } from "react";



export default function App() {
  return (
    <div>
      <Light bulbOn={bulbOn} setBulbOn={setBulbOn} />
    </div>
  );
}

function Light() {
  //roll up to parent to lowest common ancestor (LCA)
  const [bulbOn, setBulbOn] = useState(true);
  return (
    //bulbOn is a prop to the LightBulb component
    <>
      <LightBulb bulbOn={bulbOn} />
      <LightSwitch setBulbOn={setBulbOn} bulbOn={bulbOn} />
    </>
  );
}

function LightBulb({ bulbOn }) {
  return <div>{bulbOn ? "Light on" : "Light off"}</div>;
}

function LightSwitch({ setBulbOn }) {
  function toggle() {
    setBulbOn((bulbOn) => !bulbOn);

    //     ❓ If you’re wondering: How does setBulbOn(prev => !prev) work without passing bulbOn?
    // That’s because React's useState setter function (setBulbOn) accepts an updater function:

    // js
    // Copy
    // Edit
    // setBulbOn(prev => !prev);
    // This function receives the current state value (prev) from React itself, not from the surrounding scope or props.

    // So it does not need access to bulbOn directly — React ensures it’s always the latest value.
  }
  return <button onClick={toggle}>Toggle</button>;
}
