import { useEffect, useState, useRef, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Button, Form, Input } from 'antd';

// components
import { TopNavigation } from '../components/header/TopNavigation'
import { supabase } from "../configs/supabase";
import { useNavigate } from "react-router";
import Head from '../components/Head'

export const Register = () => {
  const auth = useContext(AuthContext)


  const navigate = useNavigate()

  const onFinish = async (value) => {
    const { data, error } = await supabase.auth.signUp({
      email: value?.email,
      password: value.password
    })

    if (data) {
      navigate('/login')
    }
  }

  return (
    <>
      <TopNavigation />
      <div className="App">
        {/* <Head /> */}
        <div className="template">
          <div className="form">
            <Head />
            <Form onFinish={onFinish}>
              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }]}
              >
                <Input type="email" />
              </Form.Item>

              {/* <Form.Item
                label="Username"
                name="username"
                rules={[{ required: true, message: 'Please input your username!' }]}
              >
                <Input type="text" />
              </Form.Item> */}

              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input type="password" />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  {auth.email ? 'Login' : 'Wait...'}
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  )
}

// note
// kenapa form dari ant design tidak bisa di bungkus dengan "Form"
// auth (untuk merubah value tidak bisa di terapkan) untuk Input dari ant design
