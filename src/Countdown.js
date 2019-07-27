import React, { useState } from 'react';

const Countdown = (props) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  setInterval(() => {
    const endsInDate = new Date(props.endsIn).getTime();
    const currentDate = new Date().getTime();
    setDays(Math.floor((endsInDate - currentDate) / 86400000));
    setHours(Math.floor((endsInDate - currentDate) / 3600000 % 24));
    setMinutes(Math.floor((endsInDate - currentDate) / 60000 % 60));
    setSeconds(Math.floor((endsInDate - currentDate) / 1000 % 60));
  }, 1000);
  return (
    <div className="countdown-container">
      <div className="countdown days">{days} <span>Days</span></div>
      <div className="countdown hours">{hours} <span>Hours</span></div>
      <div className="countdown minutes">{minutes} <span>Minutes</span></div>
      <div className="countdown seconds">{seconds} <span>Seconds</span></div>
    </div>
  );
}

export default Countdown;
