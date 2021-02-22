import React from 'react';
import { Tabs } from 'antd';
import TargetWrap from './TargetWrap';

const { TabPane } = Tabs;

const TargetContainer = () => {
  return (
    <Tabs defaultActiveKey="view" style={{ height: '100%' }}>
      <TabPane tab={<span>可视化</span>} key="view">
        <TargetWrap />
      </TabPane>
      <TabPane tab={<span>源码</span>} key="code">
        {/* <TargetCodeContainer /> */}
      </TabPane>
    </Tabs>
  );
};

export default TargetContainer;
