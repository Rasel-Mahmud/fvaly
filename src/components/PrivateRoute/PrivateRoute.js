import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { AppState } from '../../redux/reducers/rootReducers';

function PrivateRoute({ component: Component, ...rest }) {
  const { data } = useSelector((state: AppState) => state.auth);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        data ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
