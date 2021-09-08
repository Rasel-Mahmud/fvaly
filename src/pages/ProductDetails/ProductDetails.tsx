import { useParams } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import useAsync from '../../hooks/useAsync';
import ProductService from '../../services/ProductService';
import ProductSkeleton from '../../skeleton/productDetails';
import { addToCart } from '../../redux/actionCreators/cartAction';
import { IProduct } from '../../types';
import imageUrlParser from '../../utils/imageUrlParser';

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

  const { name, description, image } = (product || {}) as IProduct;

  const dispatchProductDetails = useDispatch();

  // const addToCartHandler = (product) => {
  //   dispatch(addToCart(product));
  // };
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
                  src={imageUrlParser(image)}
                  alt={name}
                />
              </Col>
              <Col lg={6}>
                <h3>{name}</h3>
                <button
                  className="btn btn-primary my-3"
                  onClick={() =>
                    dispatchProductDetails(addToCart(product as IProduct))
                  }
                >
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
