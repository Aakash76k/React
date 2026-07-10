import { useState, useEffect } from "react";
import "../Projectcss/DigitalClock.css";

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <>
      <div className = "clock-container">
        <h1 className = "clock-title">Digital Clock</h1>
        <h1 className= "clock-time">{time.toLocaleTimeString()}</h1>
        <h1 className="clock-date">{time.toDateString()}</h1>
      </div>
    </>
  );
};

export default DigitalClock;
