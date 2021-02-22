import React from 'react';
import { connect } from 'umi';
import { useDrop } from 'react-dnd';
import { ItemTypes } from './ItemTypes';

const TargetWrap = connect(({ dnd: { targetDnDComponentList } }) => ({
  targetDnDComponentList,
}))(({ targetDnDComponentList, dispatch }) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: ItemTypes.test,
    drop: (item) => {
      console.log('---------->');
      dispatch({
        type: 'dnd/update',
        payload: {
          test: 'test',
          item,
        },
      });
    },
    canDrop: (item) => {
      console.log(item);
      return true;
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  });

  const isActive = canDrop && isOver;
  let border = 'none';
  if (isActive) {
    border = '1px dashed darkgreen';
  } else {
    border = 'none';
  }

  const height = {
    height: '500px',
  };

  const renderDrop = () => {
    if (targetDnDComponentList.length) {
      // 渲染组件
      <div>test</div>;
    }
    return null;
  };

  return (
    <div ref={drop} style={{ border, ...height }}>
      {renderDrop()}
    </div>
  );
});

export default TargetWrap;
