import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../../components/product/product';
import { IProduct } from '../../types';
import ProductSkeleton from '../../skeleton/productSkeleton';

interface IProps {
  products: IProduct[] | null;
  isLoading: boolean;
}

function Products({ products, isLoading }: IProps) {
  return (
    <div className="store-section">
      <Container>
        <h2>Our Stores</h2>
        <Row>{isLoading && <ProductSkeleton />}</Row>
        {!isLoading && (
          <Row>
            {products?.map((product: IProduct) => (
              <Product key={product._id} productData={product} />
            ))}
          </Row>
        )}
      </Container>
    </div>
  );
}

export default Products;
