import React from 'react';
import { Route, Redirect, RouteProps } from 'react-router-dom';
import { useCookies } from 'react-cookie';

interface PrivateRouteProps extends RouteProps {
    component: React.ComponentType<any>;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, ...rest }) => {
    const [cookies] = useCookies(['user']);
    const isAuthenticated = !!cookies.user;

    return (
        <Route
            {...rest}
            render={(props) =>
                isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
            }
        />
    );
};

export default PrivateRoute;
