import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import SourceContainer from './components/SourceContainer';
import TargetContainer from './components/TargetContainer';
import styles from './index.less';

const Dnd = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.dndContainer}>
        <aside>
          <SourceContainer />
        </aside>
        <div className={styles.main}>
          <TargetContainer />
        </div>
        <aside>{/* <StyleContainer /> */}</aside>
      </div>
    </DndProvider>
  );
};

export default Dnd;
