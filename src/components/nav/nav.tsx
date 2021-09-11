import { Container, Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppState } from '../../redux/reducers/rootReducers';

function nav() {
  const { data } = useSelector((state: AppState) => state.auth);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Category</Navbar.Brand>
          <Nav className="ms-auto">
            <Nav.Link href="#home">Merchant</Nav.Link>
            <Nav.Link as={Link} to="/admin">
              {data?.role === 'admin' ? 'Admin' : 'About'}
            </Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default nav;
