import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import DefaultLayout from './components/Layout/DefaultLayout';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const Home = React.lazy(() => import('./pages/Home/Home'));
const About = React.lazy(() => import('./pages/About/About'));
const ProductDetails = React.lazy(
  () => import('./pages/ProductDetails/ProductDetails')
);
const Checkout = React.lazy(() => import('./pages/Checkout/Checkout'));
const Login = React.lazy(() => import('./pages/Login/Login'));
const Admin = React.lazy(() => import('./admin/layout/DefaultLayout'));

const AppRouter = () => (
  <Router>
    <DefaultLayout>
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/product/:id" component={ProductDetails} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/admin" component={Admin} />
        </Suspense>
      </Switch>
    </DefaultLayout>
  </Router>
);

export default AppRouter;
