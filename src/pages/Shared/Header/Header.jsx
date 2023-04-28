import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
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
            {/* --------------navbar------------- */}

            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href="#features">Home</Nav.Link>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                        </Nav>
                        <Nav className='d-flex align-items-lg-center'>
                            <Nav.Link href="#deets">Profile</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <Button variant="secondary">Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;