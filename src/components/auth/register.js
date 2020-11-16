import React from 'react';
// import PropTypes from 'prop-types';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined, ArrowLeftOutlined, MailOutlined } from '@ant-design/icons';
import './auth.style.css'

import { NavLink } from 'react-router-dom';


const Register = () => {
    
    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
    <Form
      name="register"
      className="register-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item>
        <NavLink to="/">
          <ArrowLeftOutlined /> Back
        </NavLink>
      </Form.Item>
   
      <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}>
          <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="email" type="email"/>
        </Form.Item>  
      <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your Username!',
            },
          ]}>
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
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
      <Form.Item
          name="password_again"
          rules={[
            {
              required: true,
              message: 'Please confirm password',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Сonfirm password"
          />
        </Form.Item>

  
      <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Register
          </Button>
        </Form.Item>
    </Form>
    );
};

Register.propTypes = {};

export default Register;