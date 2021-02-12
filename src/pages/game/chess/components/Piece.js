import React, { useEffect } from 'react';
import { connect } from 'umi';
import BlackBishop from './BlackBishop';
import BlackKing from './BlackKing';
import BlackKnight from './BlackKnight';
import BlackPawn from './BlackPawn';
import BlackQueen from './BlackQueen';
import BlackRook from './BlackRook';
import WhiteBishop from './WhiteBishop';
import WhiteKing from './WhiteKing';
import WhiteKnight from './WhiteKnight';
import WhitePawn from './WhitePawn';
import WhiteQueen from './WhiteQueen';
import WhiteRook from './WhiteRook';

const Piece = connect(({ gameChess: { board }, loading }) => ({
  board,
  loading: loading.effects['gameChess/init'],
}))(({ board, x, y, dispatch }) => {
  useEffect(() => {
    dispatch({
      type: 'gameChess/init',
    });
  }, [dispatch]);

  const renderPiece = () => {
    if (board.length > 0) {
      const item = board[y][x];
      if (!item) {
        return null;
      }
      const { type, color } = item;
      switch (type) {
        case 'r':
          if (color === 'b') {
            return <BlackRook x={x} y={y} color={color} />;
          }
          return <WhiteRook x={x} y={y} color={color} />;
        case 'n':
          if (color === 'b') {
            return <BlackKnight x={x} y={y} color={color} />;
          }
          return <WhiteKnight x={x} y={y} color={color} />;
        case 'b':
          if (color === 'b') {
            return <BlackBishop x={x} y={y} color={color} />;
          }
          return <WhiteBishop x={x} y={y} color={color} />;
        case 'q':
          if (color === 'b') {
            return <BlackQueen x={x} y={y} color={color} />;
          }
          return <WhiteQueen x={x} y={y} color={color} />;
        case 'k':
          if (color === 'b') {
            return <BlackKing x={x} y={y} color={color} />;
          }
          return <WhiteKing x={x} y={y} color={color} />;
        case 'p':
          if (color === 'b') {
            return <BlackPawn x={x} y={y} color={color} />;
          }
          return <WhitePawn x={x} y={y} color={color} />;
        default:
          return null;
      }
    }

    return null;
  };

  return <>{renderPiece()}</>;
});

export default Piece;
