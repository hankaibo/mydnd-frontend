import React from 'react';
import { useDrag, DragPreviewImage } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import { knightImage } from './knightImage';

// 拖动源组件，需要三个参数：类型、拖放源函数、收集函数。
const WhiteKing = ({ x, y }) => {
  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: ItemTypes.BLACK_ROOK, x, y },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <>
      <DragPreviewImage connect={preview} src={knightImage} />
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
        ♜
      </div>
    </>
  );
};

export default WhiteKing;
