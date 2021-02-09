import React from 'react';
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

const Piece = connect(({ gameChess: { blackPosition, whitePosition } }) => ({
  blackPosition,
  whitePosition,
}))(({ blackPosition, whitePosition, x, y }) => {
  const { blackRook, blackKnight, blackBishop, blackQueen, blackKing, blackPawn } = blackPosition;
  const { whiteRook, whiteKnight, whiteBishop, whiteQueen, whiteKing, whitePawn } = whitePosition;

  const renderPiece = () => {
    for (let i = 0; i < blackRook.length; i += 1) {
      const item = blackRook[i];
      if (item[0] === x && item[1] === y) {
        return <BlackRook x={x} y={y} />;
      }
    }
    for (let i = 0; i < blackKnight.length; i += 1) {
      const item = blackKnight[i];
      if (item[0] === x && item[1] === y) {
        return <BlackKnight x={x} y={y} />;
      }
    }
    for (let i = 0; i < blackBishop.length; i += 1) {
      const item = blackBishop[i];
      if (item[0] === x && item[1] === y) {
        return <BlackBishop x={x} y={y} />;
      }
    }
    for (let i = 0; i < blackQueen.length; i += 1) {
      const item = blackQueen[i];
      if (item[0] === x && item[1] === y) {
        return <BlackQueen x={x} y={y} />;
      }
    }
    for (let i = 0; i < blackKing.length; i += 1) {
      const item = blackKing[i];
      if (item[0] === x && item[1] === y) {
        return <BlackKing x={x} y={y} />;
      }
    }
    for (let i = 0; i < blackPawn.length; i += 1) {
      const item = blackPawn[i];
      if (item[0] === x && item[1] === y) {
        return <BlackPawn x={x} y={y} />;
      }
    }
    for (let i = 0; i < whiteRook.length; i += 1) {
      const item = whiteRook[i];
      if (item[0] === x && item[1] === y) {
        return <WhiteRook x={x} y={y} />;
      }
    }
    for (let i = 0; i < whiteKnight.length; i += 1) {
      const item = whiteKnight[i];
      if (item[0] === x && item[1] === y) {
        return <WhiteKnight x={x} y={y} />;
      }
    }
    for (let i = 0; i < whiteBishop.length; i += 1) {
      const item = whiteBishop[i];
      if (item[0] === x && item[1] === y) {
        return <WhiteBishop x={x} y={y} />;
      }
    }
    for (let i = 0; i < whiteQueen.length; i += 1) {
      const item = whiteQueen[i];
      if (item[0] === x && item[1] === y) {
        return <WhiteQueen x={x} y={y} />;
      }
    }
    for (let i = 0; i < whiteKing.length; i += 1) {
      const item = whiteKing[i];
      if (item[0] === x && item[1] === y) {
        return <WhiteKing x={x} y={y} />;
      }
    }
    for (let i = 0; i < whitePawn.length; i += 1) {
      const item = whitePawn[i];
      if (item[0] === x && item[1] === y) {
        return <WhitePawn x={x} y={y} />;
      }
    }
    return null;
  };

  return <>{renderPiece()}</>;
});

export default Piece;
