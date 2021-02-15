import React from 'react';
import { Link } from 'umi';

const Home = () => {
  return (
    <>
      <h2>Hello! 这是一个可视化拖拽学习项目，目前还在开发中。😂</h2>
      <p>但是有一些拖拽的学习示例，如果您感兴趣，可以点进去看一下哟！</p>
      <ol>
        <li>
          <Link to="/game/chess">国际象棋</Link>
        </li>
      </ol>
    </>
  );
};

export default Home;
