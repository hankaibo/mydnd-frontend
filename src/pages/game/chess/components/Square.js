import React from 'react';

const lightColor = '#f0d9b6';
const darkColor = '#b58863';

const Square = ({ children, black }) => {
  const backgroundColor = black ? darkColor : lightColor;
  const color = black ? lightColor : darkColor;
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
