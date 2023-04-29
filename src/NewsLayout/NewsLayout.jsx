import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import RightNav from '../pages/Shared/RightNav/RightNav';

const NewsLayout = () => {
    return (
        <div>
            <Header/>
            <Container>
                <Row>
                    {/*----------------- main seciton -------*/}
                    <Col lg={9}>
                        <Outlet></Outlet>
                    </Col>

                    {/*---------------- right navbar ---------*/}
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer/>
        </div>
    );
};

export default NewsLayout;