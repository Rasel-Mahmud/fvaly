import React from 'react';
import { Container } from 'react-bootstrap';
import { BiSearch, BiShoppingBag } from 'react-icons/bi';
import { FiUser } from 'react-icons/fi';
import Logo from '../../assets/images/logo.png';

function middleHeader() {
  return (
    <div className="middle-container">
      <Container className="d-flex align-items-center">
        <img src={Logo} alt="Logo" className="logo" />
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
          <ul className="icon-style list-unstyled d-flex gap-3">
            <li>
              <BiShoppingBag />
            </li>
            <li>
              <FiUser />
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default middleHeader;
