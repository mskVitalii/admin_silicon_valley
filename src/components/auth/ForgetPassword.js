import React from 'react';
// import PropTypes from 'prop-types';
import { Form, Input, Button } from 'antd';
import { ArrowLeftOutlined, MailOutlined } from '@ant-design/icons';

import './auth.style.css'

const ForgetPassword = () => {

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    return (
    <Form
        name="forget_login"
        className="forgetpassword-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
    >
      <Form.Item>
        <a href="/">
          <ArrowLeftOutlined /> Back
        </a>
      </Form.Item>
  
      <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}>
          <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder=" yourEmail@gmail.com" type="email"/>
        </Form.Item>  


      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Reset password
        </Button>
      </Form.Item>
    </Form>
    );
};

ForgetPassword.propTypes = {};

export default ForgetPassword;