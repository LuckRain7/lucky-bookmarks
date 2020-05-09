import React, { Component } from 'react';
import styles from './index.less';
import { connect } from 'dva';
import { CategoryHttp } from '../../services/index';

import HeaderMiddle from './components/HeaderMiddle'; // 分离头部下方组件
import SiderBar from './components/SiderBar'; // 分离头部下方组件

import { Layout } from 'antd';
const { Content } = Layout;

const categoryHttp = new CategoryHttp();

class index extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      user: props.user,
      categoryList: [],
    };
  }

  // 拿取分类数据
  componentDidMount() {
    categoryHttp.getCategory().then(data => {
      this.setState(prevState => {
        return {
          categoryList: data.data,
        };
      });
    });
  }

  render() {
    return (
      <Content style={{ padding: '0 50px' }}>
        {/* 中部按钮 */}
        <HeaderMiddle />
        <Layout
          className="site-layout-background"
          style={{ padding: '24px 0' }}
        >
          {/* 左侧菜单栏 */}
          <SiderBar categoryList={this.state.categoryList}></SiderBar>
          {/* 右侧详情 */}
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            Content
          </Content>
        </Layout>
      </Content>
    );
  }
}

export default connect(({ user }) => ({ user }))(index);
