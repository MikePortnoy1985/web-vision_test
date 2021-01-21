import { Route, Redirect } from 'react-router-dom'

export const PrivateRoute = ({ component: Component, isAuth, ...rest }) => {
   return <Route {...rest} render={props => (isAuth ? <Component {...props} /> : <Redirect to={'/login'} />)} />
}
