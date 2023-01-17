import { useEffect, useState } from 'react';

const todaysDate = () => {
  const date = new Date();
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };

  return date.toLocaleString('en-US', options).replace(/,([^,]*)$/, '$1');
};

const todaysTime = () => {
  const time = new Date();
  const options: Intl.DateTimeFormatOptions = {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  };

  return time.toLocaleString('en-US', options);
};

const useDateTime = () => {
  const [date, setDate] = useState(todaysDate());
  const [time, setTime] = useState(todaysTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(todaysDate());
      setTime(todaysTime());
    }, 30000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return {
    date: date,
    time: time,
  };
};

export default useDateTime;
