import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';

const Login = () => {

    const { signIn } = useContext(AuthContext)

    const [message, setMessage] = useState('')

    const location = useLocation()
    console.log('login page location', location)

    const from = location.state?.from?.pathname || '/'

    const navigate = useNavigate()

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        signIn(email, password).then((result) => {
            const loggedUser = result.user;
            console.log(loggedUser)
            form.reset()
            setMessage('logged in successfully');
            navigate(from, {replace: true})
        }).catch((error) => {
            setMessage(error.message)
        })
    }

    return (
        <Container>
            <Form onSubmit={handleLogin} className='w-25 border p-3 mx-auto mt-5'>
                <h3>Please Login</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' required placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' required placeholder="Password" />
                </Form.Group>


                <Button variant="primary w-100" type="Login">Submit</Button>
                <Form.Text className='text-success'>
                    Dont have an account?<Link to='/register'> Register</Link>
                </Form.Text> <br />
                <Form.Text className='text-success'>{message}</Form.Text>
            </Form>


        </Container>
    );
};

export default Login;