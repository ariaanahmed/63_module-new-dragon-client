import React from 'react';
import Header from './pages/Shared/Header/Header';
import Footer from './pages/Shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNav from './pages/Shared/LeftSideNav/LeftNav';
import RightNav from './pages/Shared/RightNav/RightNav';

const App = () => {
  return (
    <div>
      <Header/>
      <Container>
        <Row>
          {/* -----------------left nav -----------*/}
          <Col lg={3}>
              <LeftNav></LeftNav>
          </Col>

          {/*----------------- main seciton -------*/}
          <Col lg={6}>
            <h2>Main content is coming soon</h2>
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

export default App;