import React, { useState } from 'react';
import useInterval from '@/components/Hook/useInterval';

const Clock = ({ turn }) => {
  const [time, setTime] = useState(0);

  useInterval(() => {
    if (turn) {
      setTime(time + 1);
    }
  }, 1000);

  const format = (seconds) => {
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor((seconds % 3600) % 60);
    return `${(m < 10 ? '0' : '') + m}:${s < 10 ? '0' : ''}${s}`;
  };
  return <div>{format(time)}</div>;
};

export default Clock;
