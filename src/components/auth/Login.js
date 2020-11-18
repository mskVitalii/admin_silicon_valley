import React from 'react';
// import PropTypes from 'prop-types';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

import './auth.style.css'

const Login = () => {

  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form
      name="login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username or Email!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username or email" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <NavLink to="/forgetpassword">
          <span className="login-form-forgot">
            Forgot password
            </span>
        </NavLink>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
          </Button>
        {/* Or <a href="/register">register now!</a> */}
      </Form.Item>
    </Form>
  );
};

Login.propTypes = {};


export default Login;
