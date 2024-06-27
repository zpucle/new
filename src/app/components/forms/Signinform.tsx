"use client";
import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Form, Input, Checkbox, Button, Row, Col } from 'antd';
import { useRouter } from 'next/router';

export default function Signinform() {

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
   
  };

  return (
    <div
    style={{
        backgroundImage: 'url("/images/1.jpg")',
        backgroundSize: 'cover',
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      
    >
      <Form
        layout="vertical" // Adjust layout as needed
        initialValues={{ remember: true }}
        onFinish={onFinish}
        style={{
          backgroundColor: 'white',
          padding: '17px',
          borderRadius: 16, // Use consistent border radius
        }}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} />
        </Form.Item>
        <Form.Item>
          <Checkbox>Remember me</Checkbox>
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>

              Or <a href="http://localhost:3000/auth/signup">Signin</a>
           
        </Form.Item>
      </Form>
    </div>
  );
};
