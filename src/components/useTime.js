import { useState, useEffect } from "react";

const useTime = () => {
  const [time, setTime] = useState(59);

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
