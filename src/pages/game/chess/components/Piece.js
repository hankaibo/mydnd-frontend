import React from 'react';
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
import transformPosition from './utils';

const Piece = ({ board, x, y }) => {
  const pos = transformPosition(x, y);

  const renderPiece = () => {
    const item = board[y][x];
    if (!item) {
      return null;
    }
    const { type, color } = item;
    switch (type) {
      case 'r':
        if (color === 'b') {
          return <BlackRook pos={pos} />;
        }
        return <WhiteRook pos={pos} />;
      case 'n':
        if (color === 'b') {
          return <BlackKnight pos={pos} />;
        }
        return <WhiteKnight pos={pos} />;
      case 'b':
        if (color === 'b') {
          return <BlackBishop pos={pos} />;
        }
        return <WhiteBishop pos={pos} />;
      case 'q':
        if (color === 'b') {
          return <BlackQueen pos={pos} />;
        }
        return <WhiteQueen pos={pos} />;
      case 'k':
        if (color === 'b') {
          return <BlackKing pos={pos} />;
        }
        return <WhiteKing pos={pos} />;
      case 'p':
        if (color === 'b') {
          return <BlackPawn pos={pos} />;
        }
        return <WhitePawn pos={pos} />;
      default:
        return null;
    }
  };

  return <>{renderPiece()}</>;
};

export default Piece;
