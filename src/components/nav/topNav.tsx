import React from 'react';
import { Container } from 'react-bootstrap';
import { BiPhoneCall } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import { BsPhone } from 'react-icons/bs';

function topNav() {
  return (
    <div className="header_top bg-light">
      <Container className="d-flex py-2 border-bottom align-items-center justify-content-between">
        <ul className="list-unstyled d-flex gap-4 align-items-center">
          <li>
            <BiPhoneCall />
            <a href="tel:09638111666">09638111666</a>
          </li>
          <li>
            <HiOutlineMail />
            <a href="mailto:support@evaly.com.bd">support@evaly.com.bd</a>
          </li>
        </ul>
        <div>
          <BsPhone />
          <a href="https://rasel-portfolio.com">Save big on our app!</a>
        </div>
      </Container>
    </div>
  );
}

export default topNav;
