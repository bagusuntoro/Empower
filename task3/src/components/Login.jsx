import { useEffect, useState, useRef, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Button, Form } from 'antd';

export const Login = () => {
    const auth = useContext(AuthContext)

    const [input, setInput] = useState('')
    const inputRef = useRef('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('send :' + inputRef.current.value)
        alert('send :' + inputRef.current.value)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <input type="text" ref={inputRef} />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <input type="password" />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        {auth.email ? 'Login' : 'Wait...'}
                    </Button>
                </Form.Item>
            </form>
        </>
    )
}

// note
// kenapa form dari ant design tidak bisa di bungkus dengan "Form"
// auth (untuk merubah value tidak bisa di terapkan) untuk Input dari ant design
