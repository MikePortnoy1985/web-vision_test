import React from 'react'
import { Registration } from './Registration'
import { useFormik } from 'formik'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { thunks, actions } from '../../store/actions'

export const RegistrationContainer = () => {
   const { isSuccessCreate } = useSelector(state => state.app)
   const dispatch = useDispatch()
   const history = useHistory()

   React.useEffect(() => {
      if (isSuccessCreate) {
         setTimeout(() => history.push('/login'), 2000)
         dispatch(actions.isSuccessCreate(null))
      }
   }, [isSuccessCreate, history, dispatch])

   const formik = useFormik({
      initialValues: {
         email: '',
         password: '',
         phone: '',
         invitedBy: '',
         name: '',
         surname: '',
         countryKey: '',
      },
      validate: values => {
         const errors = {}
         if (!values.email) {
            errors.email = 'Email is required'
         } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address'
         }
         if (!values.password) {
            errors.password = 'Password is required'
         }
         if (!values.invitedBy) {
            errors.invitedBy = 'Invite is required'
         }
         if (!values.name) {
            errors.name = 'Name is required'
         }
         if (!values.surname) {
            errors.surname = 'Surname is required'
         }
         if (!values.countryKey) {
            errors.countryKey = 'Country key is required'
         }
         return errors
      },
      onSubmit: values => {
         dispatch(
            thunks.createUser({
               user: {
                  email: values.email,
                  password: values.password,
               },
               phone: values.phone,
               invited_by: values.invitedBy,
               name: values.name,
               surname: values.surname,
               country_key: values.countryKey,
            }),
         )
      },
   })

   return <Registration formik={formik} />
}
