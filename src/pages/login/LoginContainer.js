import { LoginPage } from './Login'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { thunks } from '../../store/actions'

export const LoginContainer = () => {
   const dispatch = useDispatch()
   const formik = useFormik({
      initialValues: {
         username: '',
         password: '',
      },
      validate: values => {
         const errors = {}
         if (!values.username) {
            errors.username = 'User name is required'
         }
         if (!values.password) {
            errors.password = 'Password is required'
         }
         return errors
      },
      onSubmit: values => {
         dispatch(
            thunks.loginUser({
               username: values.username,
               password: values.password,
            }),
         )
      },
   })

   return <LoginPage formik={formik} />
}
