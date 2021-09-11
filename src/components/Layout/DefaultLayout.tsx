import React, { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../nav/Header';

type IProps = {
  children: ReactNode;
};

function DefaultLayout({ children }: IProps) {
  const location = useLocation();
  return (
    <>
      {!location.pathname.includes('admin') && <Header />}
      {children}
      {!location.pathname.includes('admin') && <Footer />}
    </>
  );
}

export default DefaultLayout;
