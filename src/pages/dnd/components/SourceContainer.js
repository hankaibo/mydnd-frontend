import React from 'react';
import { Collapse } from 'antd';
import { connect } from 'umi';
import SourceWrap from './SourceWrap';

const { Panel } = Collapse;

const SourceContainer = connect(({ dnd: { sourceDnDComponentList } }) => ({
  sourceDnDComponentList,
}))(({ sourceDnDComponentList }) => {
  const recursion = (dataSource) => {
    return dataSource.map((collapse, index) => {
      if (collapse.subCollapse) {
        return <Collapse defaultActiveKey={index}>{recursion(collapse.subCollapse)}</Collapse>;
      }
      return (
        <Panel header={collapse.title} key={collapse.id}>
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {collapse.children.map((item) => (
              <SourceWrap key={item.id} item={item} />
            ))}
          </div>
        </Panel>
      );
    });
  };

  return <Collapse>{recursion(sourceDnDComponentList)}</Collapse>;
});

export default SourceContainer;
