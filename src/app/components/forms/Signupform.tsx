"use client";

import React from 'react';
import { Form, Input, Button, Layout } from 'antd';
export {}

export default function Signupform() {
   
const onFinish = (values: any) => {
    console.log('Received values:', values);
  };
 

  return (
  <div  style={{
    backgroundImage: 'url("./images/1.jpg")',
    backgroundSize: 'cover',
    minHeight:'100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'}}
    >
    
    
      <Form style={{
            backgroundColor: 'white',
            padding: '17px 17px 17px 17px',
            borderEndEndRadius: '16px',
            borderTopRightRadius: '17px',
            borderTopLeftRadius: '17px',
            borderBottomLeftRadius: '16px',
            borderBottomRightRadius: '16px'
          }}
        name="register-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input placeholder="Username" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password placeholder="Password" />
        </Form.Item>

        <Form.Item
          name="confirm"
          dependencies={['password']}
          rules={[
            {
              required: true,
              message: 'Please confirm your password!',
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                  return Promise.resolve();
                }
                return Promise.reject(new Error('The two passwords do not match!'));
              },
            }),
          ]}
        >
          <Input.Password placeholder="Confirm Password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
          Or <a href="http://localhost:3000/auth/signin">Signup</a>
        </Form.Item>
      </Form>
      <div>
      <Layout style={{ backgroundImage: 'url("./images/1.jpg")', backgroundSize: 'cover', minHeight: '100vh', display: 'flex'}} >

</Layout>
      </div>
    </div>
  );
};

