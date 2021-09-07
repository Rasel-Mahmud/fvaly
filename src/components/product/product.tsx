import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IProduct } from '../../types';
import imageUrlParser from '../../utils/imageUrlParser';

interface IProps {
  productData: IProduct;
}

function product({ productData }: IProps) {
  return (
    <Col lg={3} className="mb-5">
      <Link to={`/product/${productData._id}`}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={imageUrlParser(productData.image)} />
          <Card.Body>
            <Card.Text>{productData.name}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
}

export default product;
