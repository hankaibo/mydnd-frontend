import React from 'react';
import { useDrop } from 'react-dnd';
import { connect } from 'umi';
import { ItemTypes } from './ItemTypes';
import Square from './Square';
import Overlay from './Overlay';
import transformPosition from './utils';

// 拖放目标组件。
const BoardSquare = connect(({ gameChess: { chess } }) => ({
  chess,
}))(({ children, x, y, dispatch }) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: Object.keys(ItemTypes).map((key) => ItemTypes[key]),
    drop: (item) => {
      dispatch({
        type: 'gameChess/move',
        payload: {
          item,
          pos: transformPosition(x, y),
        },
      });
    },
    collect: (monitor) => {
      return {
        isOver: !!monitor.isOver(),
        // canDrop: !!monitor.canDrop(),
      };
    },
  });

  const black = (x + y) % 2 === 1;

  return (
    <div ref={drop} style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Square black={black}>
        {`${x}${y}`}
        {children}
      </Square>
      {isOver && !canDrop && <Overlay color="red" />}
      {!isOver && canDrop && <Overlay color="yellow" />}
      {isOver && canDrop && <Overlay color="green" />}
    </div>
  );
});

export default BoardSquare;
