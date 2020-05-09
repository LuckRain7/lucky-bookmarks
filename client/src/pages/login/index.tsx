import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { connect } from 'dva';
import { history } from 'umi';
// 引入样式
import './index.less';

// 用户登录接口
interface uesrLogin {
  username: string;
  password: string;
  remember: boolean;
}

const NormalLoginForm = props => {
  const { addUser } = props;

  const onFinish = (values: uesrLogin): void => {
    const user = {
      name: 'rain',
      age: '18',
      token: '',
    };
    console.log('Received values of form: ', values);
    addUser(user);
    history.push('/');
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          size="large"
          placeholder="用户名"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          size="large"
          type="password"
          placeholder="密码"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>记住我</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          忘记密码
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          登录
        </Button>
      </Form.Item>
    </Form>
  );
};

// const render = ({ user, addUser }) => {
//   console.log(user);
const render = props => {
  console.log(props);

  const addUser = user => {
    const { dispatch } = props;
    dispatch({
      type: 'user/addUser',
      user,
    });
  };

  return (
    <div className="login">
      {/* 占位 */}
      <div style={{ height: '100px' }}></div>
      {/* 系统名称 */}
      <div className="title">Lucky Bookmarks</div>
      {/* 登录区 */}
      <div className="main">
        <div className="main-form">
          <NormalLoginForm addUser={addUser} />
        </div>
      </div>
    </div>
  );
};


export default connect(({ user }) => ({ user }))(render);
