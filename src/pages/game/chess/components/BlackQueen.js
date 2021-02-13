import React from 'react';
import { useDrag, DragPreviewImage } from 'react-dnd';
import { connect } from 'umi';
import { ItemTypes } from './ItemTypes';
import { blackQueen } from './ItemImages';

// 拖动源组件
const WhiteKing = connect(({ gameChess: { chess, gameOver, turn } }) => ({
  chess,
  gameOver,
  turn,
}))(({ gameOver, turn, pos, dispatch }) => {
  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: ItemTypes.BLACK_QUEEN, pos },
    begin: () => {
      dispatch({
        type: 'gameChess/updateMoves',
        payload: {
          pos,
        },
      });
    },
    end: () => {
      dispatch({
        type: 'gameChess/clearMoves',
      });
    },
    canDrag: () => {
      if (gameOver) {
        return false;
      }
      return turn !== 'w';
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <>
      <DragPreviewImage connect={preview} src={blackQueen} />
      <div
        ref={drag}
        style={{
          color: '#151417',
          fontSize: 40,
          fontWeight: 'bold',
          cursor: 'move',
          opacity: isDragging ? 0.5 : 1,
        }}
      >
        ♛
      </div>
    </>
  );
});

export default WhiteKing;
