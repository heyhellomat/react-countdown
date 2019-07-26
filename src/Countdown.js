import React, { useState } from 'react';

const Countdown = (props) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  setInterval(() => {
    let now = new Date();
    let dateArray = props.endsIn.split(/-|:| /g);
    let daysFinal = dateArray[1] - now.getDate();
    let hoursFinal = dateArray[3] - now.getHours();
    let minutesFinal = dateArray[4] - now.getMinutes();
    let secondsFinal = dateArray[5] - now.getSeconds();
    setDays(daysFinal);
    setHours(hoursFinal);
    setMinutes(minutesFinal);
    setSeconds(secondsFinal);
  }, 1000);
  return (
    <div className="countdown">
      <div className="days">{days} <span>Days</span></div>
      <div className="hours">{hours} <span>Hours</span></div>
      <div className="minutes">{minutes} <span>Minutes</span></div>
      <div className="seconds">{seconds} <span>Seconds</span></div>
    </div>
  );
}

export default Countdown;
