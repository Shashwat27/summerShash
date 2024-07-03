// Home.js
import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Home = () => {
  return (
    <Container fluid className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
      <Row className="text-center">
        <Col>
          <h1 className="display-4">Welcome to SummerShash</h1>
          <p className="lead">Click on Register or Login to get started.</p>
          <div className="mt-4">
            <LinkContainer to="/register">
              <Button variant="primary" className="mx-2">Register</Button>
            </LinkContainer>
            <LinkContainer to="/login">
              <Button variant="secondary" className="mx-2">Login</Button>
            </LinkContainer>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
