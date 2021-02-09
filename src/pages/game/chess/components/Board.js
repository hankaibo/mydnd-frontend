import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import BoardSquare from './BoardSquare';
import Piece from './Piece';

const Board = () => {
  const renderSquare = (i) => {
    const x = i % 8;
    const y = Math.floor(i / 8);

    return (
      <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
        <BoardSquare x={x} y={y}>
          <Piece x={x} y={y} />
        </BoardSquare>
      </div>
    );
  };

  const squares = [];
  for (let i = 0; i < 64; i += 1) {
    squares.push(renderSquare(i));
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ width: '100%', height: '100%', display: 'flex', flexWrap: 'wrap' }}> {squares} </div>
    </DndProvider>
  );
};

export default Board;
