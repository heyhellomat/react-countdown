import React, { useState } from 'react';

const Countdown = (props) => {
  const [days, setDays] = useState(null);
  const [hours, setHours] = useState(null);
  const [minutes, setMinutes] = useState(null);
  const [seconds, setSeconds] = useState(null);
  const countDate = setInterval(() => {
    const endsInDate = new Date(props.endsIn).getTime();
    const currentDate = new Date().getTime();
    setDays(Math.floor((endsInDate - currentDate) / 86400000));
    setHours(Math.floor((endsInDate - currentDate) / 3600000 % 24));
    setMinutes(Math.floor((endsInDate - currentDate) / 60000 % 60));
    setSeconds(Math.floor((endsInDate - currentDate) / 1000 % 60));
  }, 1000);
  if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
    clearInterval(countDate);
  }
  return (
    seconds <= 0 ? ('Ended!') : (
      <div className="countdown-container">
        <div className="countdown days">{days} <span>Days</span></div>
        <div className="countdown hours">{hours} <span>Hours</span></div>
        <div className="countdown minutes">{minutes} <span>Minutes</span></div>
        <div className="countdown seconds">{seconds} <span>Seconds</span></div>
      </div>
    )
  );
}

export default Countdown;
