import React from 'react';
import Board from './components/Board';

const containerStyle = {
  width: '500px',
  height: '500px',
  border: '1px solid gray',
};
const index = () => (
  <div style={containerStyle}>
    <Board />
  </div>
);

export default index;
