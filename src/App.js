import s from './App.module.css'
import { PrivateRoute } from './utils/PrivateRoute'
import { Switch, Redirect } from 'react-router-dom'
import { UserPageContainer } from './pages/userPage/UserPageContainer'
import { RegistrationContainer } from './pages/registration/RegistrationContainer'
import { LoginContainer } from './pages/login/LoginContainer'
import Container from '@material-ui/core/Container'
import LinearProgress from '@material-ui/core/LinearProgress'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { PublicRoute } from './utils/PublicRoute'
import { actions, thunks } from './store/actions'
import { useEffect } from 'react'

export const App = () => {
   const { isLoading, isAuth } = useSelector(state => state.app)
   const dispatch = useDispatch()

   useEffect(() => {
      const id = localStorage.getItem('clientId')
      if (localStorage.getItem('accessToken')) {
         dispatch(actions.setUserID(id))
         dispatch(actions.isAuth(true))
      } else if (localStorage.getItem('refreshToken')) {
         dispatch(actions.setUserID(id))
         dispatch(thunks.refreshToken())
      } else {
         dispatch(actions.isAuth(false))
      }
   }, [dispatch, isAuth])

   return (
      <BrowserRouter>
         {isLoading && <LinearProgress />}
         <Container className={s.app} maxWidth={'xl'}>
            <Switch>
               <PublicRoute exact path={'/login'} isAuth={isAuth} component={LoginContainer} />
               <PublicRoute exact path={'/signup'} isAuth={isAuth} component={RegistrationContainer} />
               <PrivateRoute exact path={'/'} isAuth={isAuth} component={UserPageContainer} />
            </Switch>
         </Container>
      </BrowserRouter>
   )
}
