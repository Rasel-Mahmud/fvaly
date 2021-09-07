import React, { Suspense, ReactNode } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Home = React.lazy(() => import('./pages/Home/Home'));
const About = React.lazy(() => import('./pages/About/About'));
const ProductDetails = React.lazy(
  () => import('./pages/ProductDetails/ProductDetails')
);
const Checkout = React.lazy(() => import('./pages/Checkout/Checkout'));

type IProps = {
  children: ReactNode;
};

const AppRouter = ({ children }: IProps) => (
  <Router>
    {children}
    <Switch>
      <Suspense fallback={<div>Loading...</div>}>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/product/:id" component={ProductDetails} />
        <Route exact path="/checkout" component={Checkout} />
      </Suspense>
    </Switch>
  </Router>
);

export default AppRouter;
