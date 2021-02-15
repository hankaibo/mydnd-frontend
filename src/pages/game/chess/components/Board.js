import React, { useState, useEffect } from 'react';
import { PageLoading } from '@ant-design/pro-layout';
import { connect } from 'umi';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import BoardSquare from './BoardSquare';
import Piece from './Piece';

const Board = connect(({ gameChess: { board }, loading }) => ({
  board,
  loading: loading.effects['gameChess/initChess'],
}))(({ loading, board, dispatch }) => {
  const [squares, setSquares] = useState([]);

  const renderSquare = (i) => {
    const x = i % 8;
    const y = Math.floor(i / 8);

    return (
      <div key={i} style={{ width: '12.5%', height: '12.5%' }}>
        <BoardSquare x={x} y={y}>
          <Piece x={x} y={y} board={board} />
        </BoardSquare>
      </div>
    );
  };

  useEffect(() => {
    dispatch({
      type: 'gameChess/initChess',
    });
    return () => {
      dispatch({
        type: 'gameChess/destroyChess',
      });
    };
  }, [dispatch]);

  useEffect(() => {
    if (board.length) {
      const temp = [];
      for (let i = 0; i < 64; i += 1) {
        temp.push(renderSquare(i));
        setSquares(temp);
      }
    }
  }, [board]);

  return (
    <DndProvider backend={HTML5Backend}>
      {loading ? (
        <PageLoading />
      ) : (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexWrap: 'wrap' }}> {squares} </div>
      )}
    </DndProvider>
  );
});

export default Board;
