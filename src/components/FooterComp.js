import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const FooterComp = () => {
  return (
    <div className="footer pb-3 pt-4">
      <Container>
        <Row>
          <Col className="fw-bold text-white">
            <h3 data-aos="fade-up">Hotels</h3>
          </Col>
          <Col className="text-end" data-aos="fade-up" data-aos-delay="200">
            <i class="fa-brands fa-facebook text-white fs-1 mx-lg-3 md-2"></i>
            <i class="fa-brands fa-x-twitter text-white fs-1 mx-lg-3 md-2"></i>
            <i class="fa-brands fa-instagram text-white fs-1 mx-lg-3 md-2"></i>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center text-white-50">&copy; Copyright by Yoga Nugraha 2024, All Right Reserved.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComp;
