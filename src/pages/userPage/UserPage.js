import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import s from './UserPage.module.css'

export const UserPage = ({ logout, userInfo, show }) => {
   return (
      <>
         <div>User page</div>
         <Button variant={'contained'} color={'primary'} onClick={logout}>
            Log out
         </Button>
         <Paper className={s.paper} elevation={3}>
            {show && (
               <ul>
                  <li>Email: {userInfo.email}</li>
                  <li>Name: {userInfo.name}</li>
                  <li>Surname: {userInfo.surname}</li>
               </ul>
            )}
         </Paper>
      </>
   )
}
