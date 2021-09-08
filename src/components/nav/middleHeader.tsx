import React from 'react';
import { Container } from 'react-bootstrap';
import { BiSearch, BiShoppingBag } from 'react-icons/bi';
import { FaSignOutAlt } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import { logout } from '../../redux/actionCreators/authAction';
import { AppState } from '../../redux/reducers/rootReducers';
import { IProduct } from '../../types';

function middleHeader() {
  const cart: IProduct[] = useSelector((state: AppState) => state.cart);
  const { data } = useSelector((state: AppState) => state.auth);
  const dispatch = useDispatch();
  return (
    <div className="middle-container">
      <Container>
        <div className="d-flex align-items-center gap-3">
          <Link to="/">
            <img src={Logo} alt="Logo" className="logo" />
          </Link>

          <div className="input-group">
            <input
              type="text"
              className="form-control border-primary"
              placeholder="Search here...."
              aria-label="Search here...."
              aria-describedby="button-addon2"
            />
            <button
              className="btn btn-outline-primary"
              type="button"
              id="button-addon2"
            >
              <BiSearch />
            </button>

            <ul className="icon-list list-unstyled d-flex gap-3">
              <li>
                <Link to="/checkout">
                  <BiShoppingBag />
                  <span className="badge bg-primary">{cart.length}</span>
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <FiUser />
                </Link>
              </li>
              {data && (
                <Link to="/" onClick={() => dispatch(logout())}>
                  <FaSignOutAlt />
                </Link>
              )}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default middleHeader;
