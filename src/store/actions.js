import { api } from '../api/api'

export const IS_LOADING = 'APP_STATE/IS_LOADING'
export const IS_SUCCESS_CREATE = 'APP_STATE/IS_SUCCESS_CREATE'
export const IS_AUTH = 'APP_STATE/IS_AUTH'
export const SET_USER_ID = 'APP_STATE/SET_USER_ID'
export const SET_USER_INFO = 'APP_STATE/SET_USER_INFO'

export const actions = {
   isLoading: payload => ({ type: IS_LOADING, payload }),
   isSuccessCreate: payload => ({ type: IS_SUCCESS_CREATE, payload }),
   isAuth: payload => ({ type: IS_AUTH, payload }),
   setUserID: payload => ({ type: SET_USER_ID, payload }),
   setUserInfo: payload => ({ type: SET_USER_INFO, payload }),
}

export const thunks = {
   createUser: data => async dispatch => {
      dispatch(actions.isLoading(true))
      try {
         await api.createUser(data)
         dispatch(actions.isSuccessCreate(true))
         alert('success')
      } catch (e) {
         alert(JSON.stringify(e.response.data))
      } finally {
         dispatch(actions.isLoading(false))
      }
   },
   loginUser: data => async dispatch => {
      dispatch(actions.isLoading(true))
      try {
         const response = await api.authUser(data)
         localStorage.setItem('accessToken', response.data.access)
         localStorage.setItem('refreshToken', response.data.refresh)
         dispatch(actions.isAuth(true))
         dispatch(actions.setUserID(response.data['client_id']))
         localStorage.setItem('clientId', response.data['client_id'])
      } catch (e) {
         alert(JSON.stringify(e.message))
      } finally {
         dispatch(actions.isLoading(false))
      }
   },
   refreshToken: () => async dispatch => {
      const token = localStorage.getItem('refreshToken')
      dispatch(actions.isLoading(true))
      try {
         const response = await api.refreshToken(token)
         localStorage.setItem('accessToken', response.data.access)
         dispatch(actions.isAuth(true))
      } catch (e) {
         localStorage.clear()
         dispatch(actions.isAuth(false))
      } finally {
         dispatch(actions.isLoading(false))
      }
   },
   showUserInfo: id => async dispatch => {
      dispatch(actions.isLoading(true))
      try {
         const response = await api.showUser(id)
         dispatch(
            actions.setUserInfo({
               name: response.data.name,
               surname: response.data.surname,
               email: response.data.email,
            }),
         )
      } catch (e) {
         dispatch(actions.isAuth(false))
      } finally {
         dispatch(actions.isLoading(false))
      }
   },
}
