import React from 'react';
import { List } from 'antd';
import { connect } from 'umi';
import Clock from './Clock';
import styles from '../index.less';

// 拖动源组件
const History = connect(({ gameChess: { turn, history } }) => ({
  turn,
  history,
}))(({ turn, history }) => {
  const BlackSide = (
    <div className={styles.timer}>
      <span>黑棋</span>
      <Clock turn={turn === 'b'} />
    </div>
  );
  const WhiteSide = (
    <div className={styles.timer}>
      <span>白棋</span>
      <Clock turn={turn === 'w'} />
    </div>
  );

  return (
    <List
      className={styles.list}
      grid={{ column: 2 }}
      header={BlackSide}
      footer={WhiteSide}
      bordered
      dataSource={history}
      renderItem={(item, index) => (
        <List.Item>
          {index % 2 === 0 && <span className={styles.index}>{Math.ceil((index + 1) / 2)}</span>}
          <span>{item}</span>
        </List.Item>
      )}
    />
  );
});

export default History;
