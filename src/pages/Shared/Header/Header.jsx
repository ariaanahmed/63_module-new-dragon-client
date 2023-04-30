import React, { useContext } from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";

const Header = () => {

    return (
        <Container >
            <div className="text-center">
                <img src={logo} alt="logo" />
                <p className='text-secondary'><small>Journalism Without Fear or Favour</small></p>
                <p className='text-secondary' style={{ fontWeight: '600' }}>{moment().format('dddd, MMMM D, YYYY')}</p>
            </div>
            <div className='d-flex'>
                <Button variant='danger'>Breaking</Button>
                <Marquee pauseOnHover={true} speed={40} gradient={true} gradientWidth={40}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>
        </Container>
    );
};

export default Header;