import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import QZone from '../QZone/QZone';

import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>
            <Button className='mb-2' variant='outline-primary'><FaGoogle /> Login with Google</Button>
            <Button variant='outline-secondary'><FaGithub /> Login with GitHub</Button>
            <div>
                <h4>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item> <FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>
            <div className='position-relative'>
                <h4 className='position-absolute mt-5 start-50 translate-middle text-white text-center w-100'>Create an Amazing Newspaper</h4>
                <p className='position-absolute top-50 start-50 translate-middle text-white text-center w-100 px-2'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <Button variant='danger' className='position-absolute bottom-0 mb-5 start-50 translate-middle'>Learn More</Button>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;