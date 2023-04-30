import React from 'react';
import Header from '../pages/Shared/Header/Header';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import RightNav from '../pages/Shared/RightNav/RightNav';
import Footer from '../pages/Shared/Footer/Footer';

const NewsLayout = () => {
    return (
        <div>
             <Header/>
      <Container>
        <Row>
          {/*----------------- main seciton -------*/}
          <Col lg={9}>
            <Outlet/>
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