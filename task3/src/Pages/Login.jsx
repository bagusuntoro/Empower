import { useEffect, useState, useRef, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Button, Form, Input } from 'antd';

// components
import { TopNavigation } from '../components/header/TopNavigation'
import Head from '../components/Head'

export const Login = () => {
    const auth = useContext(AuthContext)

    const [input, setInput] = useState('')
    const inputRef = useRef('')

    const handleSubmit = (e) => {
        console.log(e)
    }

    return (
        <>
            <TopNavigation />
            <div className="App">
                {/* <Head /> */}
                <div className="template">
                    <div className="form">
                        <Head />
                        <Form onFinish={handleSubmit}>
                            <Form.Item
                                label="Username"
                                name="username"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input type="text" />
                            </Form.Item>
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
