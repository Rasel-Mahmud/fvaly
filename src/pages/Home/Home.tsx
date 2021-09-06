import Products from '../../components/home/Products';
import ProductService from '../../services/ProductService';
import Banner from '../../components/Banner/Banner';
import useAsync from '../../hooks/useAsync';

function HomePage() {
  const { data: products, isLoading } = useAsync(ProductService.getProduct);
  return (
    <>
      <Banner />
      <Products isLoading={isLoading} products={products} />
    </>
  );
}

export default HomePage;
