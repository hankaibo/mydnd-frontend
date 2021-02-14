import React from 'react';
import { useDrag, DragPreviewImage } from 'react-dnd';
import { connect } from 'umi';
import { ItemTypes } from './ItemTypes';
import { whiteKnight } from './ItemImages';

// 拖动源组件
const WhiteKing = connect(({ gameChess: { chess, gameOver, turn } }) => ({
  chess,
  gameOver,
  turn,
}))(({ chess, gameOver, turn, pos }) => {
  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: ItemTypes.WHITE_KNIGHT, pos },
    begin: () => {
      const moves = chess.moves({ square: pos });
      return {
        type: ItemTypes.WHITE_KNIGHT,
        pos,
        moves,
      };
    },
    canDrag: () => {
      if (gameOver) {
        return false;
      }
      return turn !== 'b';
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <>
      <DragPreviewImage connect={preview} src={whiteKnight} />
      <div
        ref={drag}
        style={{
          color: '#fff',
          fontSize: 40,
          fontWeight: 'bold',
          cursor: 'move',
          opacity: isDragging ? 0.5 : 1,
        }}
      >
        ♘
      </div>
    </>
  );
});

export default WhiteKing;
