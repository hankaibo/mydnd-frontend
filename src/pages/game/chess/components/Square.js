import React from 'react';

const Square = ({ children, black }) => {
  const backgroundColor = black ? '#cbd5e0' : '#75abbc';
  const color = black ? '#75abbc' : '#cbd5e0';
  return (
    <div
      style={{
        display: 'inline-flex',
        justifyContent: 'center',
        alignContent: 'center',
        width: '100%',
        height: '100%',
        color,
        backgroundColor,
      }}
    >
      {children}
    </div>
  );
};

export default Square;
