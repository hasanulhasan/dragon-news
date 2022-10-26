import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header';
import Footer from '../Pages/Footer/Footer';
import LeftsideNav from '../Pages/Shared/LeftsideNav/LeftsideNav';
import RightSideNav from '../Pages/Shared/RightSideNav/RightSideNav';

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg='2' className='d-none d-lg-block'>
            <LeftsideNav></LeftsideNav>
          </Col>
          <Col lg='7'>
            <Outlet></Outlet>
          </Col>
          <Col lg='3'>
            <RightSideNav></RightSideNav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Main;