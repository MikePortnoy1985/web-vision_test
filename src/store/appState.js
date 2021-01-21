import { IS_LOADING, IS_SUCCESS_CREATE, IS_AUTH, SET_USER_ID, SET_USER_INFO } from './actions'

const initialState = {
   isLoading: false,
   isSuccessCreate: null,
   isAuth: false,
   userId: null,
   userInfo: {
      name: null,
      surname: null,
      email: null,
   },
}

export const appState = (state = initialState, action) => {
   switch (action.type) {
      case IS_LOADING: {
         return {
            ...state,
            isLoading: action.payload,
         }
      }
      case IS_SUCCESS_CREATE: {
         return {
            ...state,
            isSuccessCreate: action.payload,
         }
      }
      case IS_AUTH: {
         return {
            ...state,
            isAuth: action.payload,
         }
      }
      case SET_USER_ID: {
         return {
            ...state,
            userId: action.payload,
         }
      }
      case SET_USER_INFO: {
         return {
            ...state,
            userInfo: {
               name: action.payload.name,
               surname: action.payload.surname,
               email: action.payload.email,
            },
         }
      }
      default:
         return state
   }
}
