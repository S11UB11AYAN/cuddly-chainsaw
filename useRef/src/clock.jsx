import { useRef, useState } from "react";

export default function Clock() {
  // the below code where time was a state variable was trigerring re-render as soon as it was updated but because it was not being displayed on the actual page but its sole purpose was to store a value therefore re-render is not necessary and can lead to performance issue
  const [currentTime, setCurrentTime] = useState(0);
  //   const [timer, setTimer] = useState(0);

  //   function startTimer() {
  //     let value = setInterval(function () {
  //       setCurrentTime((c) => c + 1);
  //     }, 1000);

  //     setTimer(value);
  //   }

  //   function stopTimer() {
  //     clearInterval(timer);
  //   }

  const timer = useRef();

  function startTimer() {
    let value = setInterval(function () {
      setCurrentTime((c) => c + 1);
    }, 1000);

    timer.current = value;
  }

  function stopTimer() {
    clearInterval(timer.current);
  }
  return (
    <>
      <button onClick={startTimer}>Start</button>
      {currentTime}
      <button onClick={stopTimer}>Stop</button>
    </>
  );
}
