import React from 'react';
import { useDrop } from 'react-dnd';
import { connect } from 'umi';
import { ItemTypes } from './ItemTypes';
import Square from './Square';
import Overlay from './Overlay';
import Notation from './Notation';
import transformPosition from './utils';

// 拖放目标组件。
const BoardSquare = connect(({ gameChess: { showNotation } }) => ({
  showNotation,
}))(({ showNotation, children, x, y, dispatch }) => {
  const pos = transformPosition(x, y);

  const [{ isOver, canDrop }, drop] = useDrop({
    accept: Object.keys(ItemTypes).map((key) => ItemTypes[key]),
    drop: (item) => {
      dispatch({
        type: 'gameChess/move',
        payload: {
          item,
          pos,
        },
      });
    },
    canDrop: (item) => {
      const { moves } = item;
      const r = moves.filter((it) => it.includes(pos));
      return !!r.length;
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  });

  const black = (x + y) % 2 === 1;

  return (
    <div ref={drop} style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Square black={black}>{children}</Square>
      {showNotation && <Notation>{transformPosition(x, y)}</Notation>}
      {isOver && !canDrop && <Overlay color="red" />}
      {!isOver && canDrop && <Overlay color="yellow" />}
      {isOver && canDrop && <Overlay color="green" />}
    </div>
  );
});

export default BoardSquare;
