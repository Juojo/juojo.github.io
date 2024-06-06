import React, { useState, useEffect } from 'react';

function Time({ timeZoneOffset }) {
  const [time, setTime] = useState('');

  function getTime(tz) {
    const d = new Date();
    const hours = (d.getUTCHours() + tz + 24) % 24; // Adjust for negative time zones
    const minutes = d.getUTCMinutes();
    const seconds = d.getUTCSeconds();

    // Pad hours, minutes, and seconds with leading zeros if necessary
    const pad = num => String(num).padStart(2, '0');

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  }

  useEffect(() => {
    function updateTime() {
      setTime(getTime(timeZoneOffset));
    }

    updateTime(); // Initial call to display the time immediately
    const intervalId = setInterval(updateTime, 1000); // Update every second

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, [timeZoneOffset]);

  return (
    <p>{time}</p>
  );
}

export default Time;
