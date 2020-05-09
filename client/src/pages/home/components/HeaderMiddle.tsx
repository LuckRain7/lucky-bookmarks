import React from 'react';
import { Breadcrumb, Button } from 'antd';

const HeaderMiddle = () => {
  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>Hello </Breadcrumb.Item>
      <Breadcrumb.Item>World</Breadcrumb.Item>
      <div style={{ float: 'right' }}>
        <Button>添加分类</Button>
        <Button>添加书签</Button>
      </div>
    </Breadcrumb>
  );
};
export default HeaderMiddle;
