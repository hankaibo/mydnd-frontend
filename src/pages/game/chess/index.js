import React from 'react';
import Board from './components/Board';
import History from './components/History';
import styles from './index.less';

const index = () => (
  <main className={styles.chess}>
    <div className={styles.board}>
      <Board />
    </div>
    <div className={styles.history}>
      <History />
    </div>
  </main>
);

export default index;
