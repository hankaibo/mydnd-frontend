import React from 'react';
import { useDrop } from 'react-dnd';
import { connect } from 'umi';
import useInterval from '@/components/Hook/useInterval';
import { ItemTypes } from './ItemTypes';
import Square from './Square';
import Overlay from './Overlay';

// 拖放目标组件。
const BoardSquare = connect(({ gameChess: { knightPosition } }) => ({
  knightPosition,
}))(({ children, x, y, dispatch }) => {
  useInterval(() => {
    const receive = [Math.round(Math.random() * 7), Math.round(Math.random() * 7)];
    dispatch({
      type: 'gameChess/move',
      payload: {
        item: {
          type: ItemTypes.BLACK_ROOK,
          x,
          y,
        },
        pos: receive,
      },
    });
  }, 300000000);

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: Object.keys(ItemTypes).map((key) => ItemTypes[key]),
    canDrop: (item) => {
      dispatch({
        type: 'gameChess/canMove',
        payload: {
          item,
          pos: [x, y],
        },
      });
    },
    drop: (item) => {
      dispatch({
        type: 'gameChess/move',
        payload: {
          item,
          pos: [x, y],
        },
      });
    },
    collect: (monitor) => {
      return {
        isOver: !!monitor.isOver(),
        canDrop: !!monitor.canDrop(),
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
