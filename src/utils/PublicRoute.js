import { Route, Redirect } from 'react-router-dom'

export const PublicRoute = ({ component: Component, isAuth, ...rest }) => {
   return <Route {...rest} render={props => (isAuth ? <Redirect to={'/'} /> : <Component {...props} />)} />
}
