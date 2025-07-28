import { createContext, useContext, useState } from "react";

const BulbContext = createContext();

function BulbContextProvider({ children }) {
  const [bulbOn, setBulbOn] = useState(true);
 return <BulbContext.Provider
    value={{
      bulbOn: bulbOn,
      setBulbOn: setBulbOn,
    }}
  >
    {children}
  </BulbContext.Provider>;
}

export default function App() {
  return (
    <div>
      <BulbContextProvider>
        <Light />
      </BulbContextProvider>
    </div>
  );
}

function Light() {
  return (
    <>
      <LightBulb />
      <LightSwitch />
    </>
  );
}

function LightBulb() {
  const { bulbOn } = useContext(BulbContext);
  return <div>{bulbOn ? "Light on" : "Light off"}</div>;
}

function LightSwitch() {
  const { bulbOn, setBulbOn } = useContext(BulbContext);
  function toggle() {
    setBulbOn(!bulbOn);
  }
  return <button onClick={toggle}>Toggle</button>;
}
