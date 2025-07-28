import { createContext, useContext, useState } from "react";

const CounterContext = createContext();

function CounterProvider({ children }) {
  const [count, setCount] = useState(0);
  return (
    <CounterContext.Provider
      value={{
        count: count,
        setCount: setCount,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
}

export default function App() {
  return (
    <div>
      <CounterProvider>
        <Parent />
      </CounterProvider>
    </div>
  );
}

function Parent() {
  return (
    <>
      <Increase />
      <Decrease />
      <Value />
    </>
  );
}

function Increase() {
  const { setCount } = useContext(CounterContext);

  function increase() {
    setCount((count) => count + 1);
  }
  return (
    <>
      <button onClick={increase}>Increase</button>
    </>
  );
}
function Decrease() {
  const { setCount } = useContext(CounterContext);

  function decrease() {
    setCount((count) => count - 1);
  }

  return (
    <>
      <button onClick={decrease}>Decrease</button>
    </>
  );
}

function Value() {
  const { count } = useContext(CounterContext);

  return <>{count}</>;
}
