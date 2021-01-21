import { UserPage } from './UserPage'
import { useDispatch, useSelector } from 'react-redux'
import { actions, thunks } from '../../store/actions'
import { useState, useEffect } from 'react'

export const UserPageContainer = () => {
   const { userId, userInfo } = useSelector(state => state.app)
   const dispatch = useDispatch()
   const [show, setShow] = useState(false)

   useEffect(() => {
      dispatch(thunks.showUserInfo(userId))
      setShow(true)
   }, [dispatch, userId])

   const logout = () => {
      localStorage.clear()
      dispatch(actions.isAuth(false))
   }

   return <UserPage logout={logout} userInfo={userInfo} show={show} />
}
