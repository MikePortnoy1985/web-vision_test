import React from 'react'
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button'
import s from './Registration.module.css'
import TextField from '@material-ui/core/TextField'

const RawRegistration = ({ formik }) => {
   return (
      <>
         <Paper className={s.paper} elevation={3}>
            <div className={s.wrapper}>
               <div>
                  <h2>Registration form</h2>
                  <p>please enter some information about you</p>
               </div>
               <form onSubmit={formik.handleSubmit}>
                  <TextField
                     label={'Email'}
                     fullWidth
                     margin='normal'
                     InputLabelProps={{
                        shrink: true,
                     }}
                     size={'small'}
                     variant='filled'
                     error={formik.touched.email && Boolean(formik.errors.email)}
                     helperText={formik.touched.email && formik.errors.email}
                     {...formik.getFieldProps('email')}
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
                  <TextField
                     label={'Phone'}
                     fullWidth
                     margin='normal'
                     InputLabelProps={{
                        shrink: true,
                     }}
                     size={'small'}
                     variant='filled'
                     {...formik.getFieldProps('phone')}
                  />
                  <TextField
                     label={'Invited by'}
                     fullWidth
                     margin='normal'
                     InputLabelProps={{
                        shrink: true,
                     }}
                     size={'small'}
                     variant='filled'
                     error={formik.touched.invitedBy && Boolean(formik.errors.invitedBy)}
                     helperText={formik.touched.invitedBy && formik.errors.invitedBy}
                     {...formik.getFieldProps('invitedBy')}
                  />
                  <TextField
                     label={'Name'}
                     fullWidth
                     margin='normal'
                     InputLabelProps={{
                        shrink: true,
                     }}
                     size={'small'}
                     variant='filled'
                     error={formik.touched.name && Boolean(formik.errors.name)}
                     helperText={formik.touched.name && formik.errors.name}
                     {...formik.getFieldProps('name')}
                  />
                  <TextField
                     label={'Surname'}
                     fullWidth
                     margin='normal'
                     InputLabelProps={{
                        shrink: true,
                     }}
                     size={'small'}
                     variant='filled'
                     error={formik.touched.surname && Boolean(formik.errors.surname)}
                     helperText={formik.touched.surname && formik.errors.surname}
                     {...formik.getFieldProps('surname')}
                  />
                  <TextField
                     label={'Country key'}
                     fullWidth
                     margin='normal'
                     InputLabelProps={{
                        shrink: true,
                     }}
                     size={'small'}
                     variant='filled'
                     error={formik.touched.countryKey && Boolean(formik.errors.countryKey)}
                     helperText={formik.touched.countryKey && formik.errors.countryKey}
                     {...formik.getFieldProps('countryKey')}
                  />
                  <Button
                     className={s.button}
                     variant={'contained'}
                     color={'primary'}
                     type={'submit'}
                     disabled={!formik.isValid || formik.isSubmitting}>
                     Submit
                  </Button>
               </form>
            </div>
         </Paper>
      </>
   )
}

export const Registration = React.memo(RawRegistration, (prevProps, nextProps) => {
   return prevProps.formik.values === nextProps.formik.values && prevProps.formik.errors === nextProps.formik.errors
})
