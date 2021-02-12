import React from 'react';
import { useDrag, DragPreviewImage } from 'react-dnd';
import { ItemTypes } from './ItemTypes';
import { knightImage } from './knightImage';
import transformPosition from './utils';

// 拖动源组件
const WhiteKing = ({ x, y, color }) => {
  const pos = transformPosition(x, y);
  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: ItemTypes.BLACK_PAWN, pos, color },
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
        ♟
      </div>
    </>
  );
};

export default WhiteKing;
