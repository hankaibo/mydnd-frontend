import React from 'react';
import { useDrag, DragPreviewImage } from 'react-dnd';
import { connect } from 'umi';
import { ItemTypes } from './ItemTypes';
import { blackKing } from './ItemImages';

// 拖动源组件
const WhiteKing = connect(({ gameChess: { chess, gameOver, turn } }) => ({
  chess,
  gameOver,
  turn,
}))(({ chess, gameOver, turn, pos }) => {
  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: ItemTypes.BLACK_KING, pos },
    begin: () => {
      const moves = chess.moves({ square: pos });
      return {
        type: ItemTypes.BLACK_KING,
        pos,
        moves,
      };
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
      <DragPreviewImage connect={preview} src={blackKing} />
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
        ♚
      </div>
    </>
  );
});

export default WhiteKing;
