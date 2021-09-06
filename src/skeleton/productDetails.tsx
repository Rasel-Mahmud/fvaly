import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

function productDetails() {
  return (
    <Row>
      <Col lg={6}>
        <Skeleton height={100} />
      </Col>
      <Col lg={6}>
        <SkeletonTheme color="#202020" highlightColor="#444">
          <Skeleton height={50} />
          <Skeleton height={50} />
          <Skeleton height={200} />
        </SkeletonTheme>
      </Col>
    </Row>
  );
}

export default productDetails;
