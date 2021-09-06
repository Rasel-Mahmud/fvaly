import React from 'react';
import Skeleton from 'react-loading-skeleton';
import { Card, Col, Row } from 'react-bootstrap';

function productSkeleton() {
  return (
    <Row>
      {Array(12)
        .fill('')
        .map(() => (
          <Col lg={3} className="mb-5">
            <Card style={{ width: '18rem' }}>
              <Skeleton height={300} />
            </Card>
          </Col>
        ))}
    </Row>
  );
}

export default productSkeleton;
