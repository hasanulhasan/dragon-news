import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header';

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col>
            <h2>Side nav</h2>
          </Col>
          <Col>
            <Outlet></Outlet>
          </Col>
          <Col>
            <h2>Right side nav</h2>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;