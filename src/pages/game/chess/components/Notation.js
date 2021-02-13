import React from 'react';

const Notation = ({ children }) => {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '30%',
        width: '30%',
        zIndex: 2,
        opacity: 0.5,
      }}
    >
      {children}
    </div>
  );
};

export default Notation;
