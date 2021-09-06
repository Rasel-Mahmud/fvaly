import React from 'react';
import { Carousel, Row, Col, Container } from 'react-bootstrap';
import SliderOne from '../../assets/images/flight.jpeg';
import SliderTwo from '../../assets/images/bike.jpeg';

function Banner() {
  return (
    <div className="banner">
      <Container>
        <Row>
          <Col lg={3}>
            <ul className="list-group">
              <li className="list-group-item">An item</li>
              <li className="list-group-item">A second item</li>
              <li className="list-group-item">A third item</li>
              <li className="list-group-item">A fourth item</li>
              <li className="list-group-item">And a fifth one</li>
              <li className="list-group-item">And a fifth one</li>
              <li className="list-group-item">And a fifth one</li>
              <li className="list-group-item">And a fifth one</li>
              <li className="list-group-item">And a fifth one</li>
            </ul>
          </Col>
          <Col lg={9} className="py-4">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={SliderOne}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={SliderTwo}
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Banner;
