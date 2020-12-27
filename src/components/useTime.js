import { useState, useEffect } from "react";

const useTime = (given) => {
  const [time, setTime] = useState(given);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [time]);

  return time;
};

export default useTime;
