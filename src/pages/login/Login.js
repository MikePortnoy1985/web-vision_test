import { NavLink } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import s from './Login.module.css'
import TextField from '@material-ui/core/TextField'

export const LoginPage = ({ formik }) => {
   return (
      <Paper className={s.paper} elevation={3}>
         <div className={s.wrapper}>
            <div>
               <h2>Login</h2>
               <p>please enter your user name and password</p>
            </div>
            <form onSubmit={formik.handleSubmit}>
               <TextField
                  label={'User name'}
                  fullWidth
                  margin='normal'
                  InputLabelProps={{
                     shrink: true,
                  }}
                  size={'small'}
                  variant='filled'
                  error={formik.touched.username && Boolean(formik.errors.username)}
                  helperText={formik.touched.username && formik.errors.username}
                  {...formik.getFieldProps('username')}
               />
               <TextField
                  label={'Password'}
                  type={'password'}
                  fullWidth
                  margin='normal'
                  InputLabelProps={{
                     shrink: true,
                  }}
                  size={'small'}
                  variant='filled'
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                  {...formik.getFieldProps('password')}
               />
               <Button variant={'contained'} color={'primary'} type={'submit'} disabled={formik.isSubmitting}>
                  Login
               </Button>
               <div className={s.signUp}>
                  or
                  <NavLink to={'/signup'}>{` Sign up `}</NavLink>
                  here
               </div>
            </form>
         </div>
      </Paper>
   )
}
