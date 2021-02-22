import React from 'react';
import { useDrag, DragPreviewImage } from 'react-dnd';
import { v4 as uuidv4 } from 'uuid';
import { ItemTypes } from './ItemTypes';

const SourceWrap = ({ item }) => {
  const [{ isDragging }, drag, preview] = useDrag({
    item: { type: ItemTypes.test },
    begin: () => {
      return {
        type: ItemTypes.test,
        id: uuidv4(),
        item,
      };
    },
    canDrag: () => {
      return true;
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <>
      <DragPreviewImage connect={preview} src="" />
      <div
        ref={drag}
        style={{
          cursor: 'move',
          opacity: isDragging ? 0.5 : 1,
        }}
      >
        {item.name}
      </div>
    </>
  );
};

export default SourceWrap;
