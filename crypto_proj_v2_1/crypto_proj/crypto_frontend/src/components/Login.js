import React, { useState} from "react";
import { Form, Button } from "react-bootstrap"; 

const Login = ({ addUser }) => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const addUserHandler = e => {
        e.preventDefault()
        addUser({
            username: username,
            email: email,
            password: password,
            completed: false
        })
    }

    return (
        <div>

        <h1>Login!</h1>
        <Form>
            <Form.Group controlId="Username">
                <Form.Label>
                    Username
                </Form.Label>
                <Form.Control type="text" placeholder="Enter Username" onChange={ e => { setUsername(e.target.value) }}/> 
            </Form.Group>

            <Form.Group controlId="Email">
                <Form.Label>
                    Email
                </Form.Label>
                <Form.Control type="text" placeholder="Enter Email" onChange={ e => { setEmail(e.target.value) }}/> 
            </Form.Group>

            <Form.Group controlId="Password">
                <Form.Label>
                    Password
                </Form.Label>
                <Form.Control type="text" placeholder="Enter Password" onChange={ e => { setPassword(e.target.value) }}/> 
            </Form.Group>

            <Button variance="primary" type="submit" onClick={ addUserHandler }> Sign Up </Button>
        </Form>
        </div>

    )
}

export default Login;