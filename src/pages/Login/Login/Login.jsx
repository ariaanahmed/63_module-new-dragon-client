import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Container>
            <Form className='w-25 border p-3 mx-auto mt-5'>
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
                </Form.Text>
                <Form.Text className='text-success'></Form.Text>
                <Form.Text className='text-danger'></Form.Text>
            </Form>


        </Container>
    );
};

export default Login;