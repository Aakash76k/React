import { useState, useEffect } from "react";
import "../Projectcss/Stopwatch.css";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => setTime((prev) => prev + 10), 10)
    } else {
      clearInterval(timer);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const formatTime = (time) => {
    const hours = String(Math.floor(time/3600000 )).padStart(2, "0");
    const minutes = String(Math.floor(time / 60000)).padStart(2, "0");
    const seconds = String(Math.floor((time % 60000) / 1000)).padStart(2, "0");

    const centiseconds = String(Math.floor((time % 1000) / 10)).padStart(2,"0",);
    return `${hours}:${minutes}:${seconds}:${centiseconds}`;
  };
  return (
    <>
      <div className="container">
        <div>
          <h1 className="title">StopWatch</h1>
          <div className="time">{formatTime(time)}</div>
          <div className="button">
            <button onClick={() => setIsRunning(true)}>Start</button>
            <button onClick={() => setIsRunning(false)}>Stop</button>
            <button
              onClick={() => {
                setIsRunning(false);
                setTime(0);
              }}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stopwatch;
