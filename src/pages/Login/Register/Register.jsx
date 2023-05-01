import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';
import { updateProfile } from 'firebase/auth';

const Register = () => {

    const [message, setMessage] = useState('')

    const [accepted, setAccepted] = useState(false)

    const { createUser } = useContext(AuthContext)

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password)

        createUser(email, password).then((result) => {
            const createdUser = result.user;
            console.log(createdUser)
            setMessage('user created successfully!')
            form.reset();
            updateUserProfile(result.user, name)

        }).catch((error) => {
            setMessage(error.message)
        })

    }
    const updateUserProfile = (user, name) => {
        updateProfile(user, {
            displayName: name,
        }).then(() => { }).catch((error) => {
            setMessage(error.message)
        })
    }

    const handleAccepted = (event) => {
        setAccepted(event.target.checked)
    }

    return (
        <Container>
            <Form onSubmit={handleRegister} className='w-25 border p-3 mx-auto mt-5'>
                <h3>Please Register</h3>

                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Control type="text" name='name' required placeholder="Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPhoto">
                    <Form.Control type="text" name='photo' required placeholder="Photo URL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" name='email' required placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" name='password' required placeholder="Password" />
                </Form.Group>

                <Form.Group className='mb-3' controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={handleAccepted}
                        type='checkbox'
                        name='accept'
                        label={<>accept <Link to='/terms'>terms and conditions</Link></>}>
                    </Form.Check>
                </Form.Group>


                <Button disabled={!accepted} variant="primary w-100" type="submit">Submit</Button>

                <Form.Text className='text-success'>
                    Already have an account?<Link to='/login'> Login</Link>
                </Form.Text> <br />
                <Form.Text className='text-success'>{message}</Form.Text>
                <Form.Text className='text-danger'></Form.Text>
            </Form>


        </Container>
    );
};

export default Register;