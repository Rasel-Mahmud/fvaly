import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductOne from '../../assets/images/products/product-one.jpeg';
import { IProduct } from '../../types';

interface IProps {
  productData: IProduct;
}

function product({ productData }: IProps) {
  return (
    <Col lg={3} className="mb-5">
      <Link to={`/product/${productData._id}`}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={ProductOne} />
          <Card.Body>
            <Card.Text>{productData.name}</Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
}

export default product;
