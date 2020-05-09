import React from 'react';
import { Layout } from 'antd';

import MyHeader from '../components/Header'; // 分离头部组件
import Home from './home/index';

import './index.less';

const { Content, Footer, Sider } = Layout;

const index = () => {
  return (
    <Layout>
      {/* 头部 */}
      <MyHeader />
      <Home />

      {/* 底部 */}
      <Footer style={{ textAlign: 'center' }}>
        Lucky Bookmarks ©2020 Created by LuckRain7
      </Footer>
    </Layout>
  );
};
export default index;
