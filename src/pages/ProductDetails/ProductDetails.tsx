import { useParams } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import useAsync from '../../hooks/useAsync';
import ProductService from '../../services/ProductService';
import ProductDetailsImage from '../../assets/images/product-details.png';
import ProductSkeleton from '../../skeleton/productDetails';

interface IParams {
  id: string;
}

function ProductDetails() {
  const { id } = useParams<IParams>();
  const {
    data: product,
    isLoading,
    isSuccess,
  } = useAsync(() => ProductService.getProductByID(id));
  const { name, description } = product || {};
  return (
    <div className="product-details-page">
      <Container>
        <div className="bg-white rounded border p-5">
          {isLoading && <ProductSkeleton />}
          {isSuccess && (
            <Row>
              <Col lg={6}>
                <img
                  className="detailsImage"
                  src={ProductDetailsImage}
                  alt="Product"
                />
              </Col>
              <Col lg={6}>
                <h3>{name}</h3>
                <button className="btn btn-primary my-3">
                  <AiOutlineShoppingCart />
                  <span className="ms-2">Add to Cart</span>
                </button>
                <p>{description}</p>
              </Col>
            </Row>
          )}
        </div>
      </Container>
    </div>
  );
}

export default ProductDetails;
