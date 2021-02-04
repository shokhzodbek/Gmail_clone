import { Button } from '@material-ui/core'
import React, { useEffect } from 'react'
import { login } from '../../features/userReducer'
import { auth,provider } from '../../firestore'
import {useDispatch} from 'react-redux'
import './styles.css'
function Login() {
      const dispatch = useDispatch()
      const signIn = ()=>{
          auth.signInWithPopup(provider)
          .then(({user})=>{
                dispatch(login({
                    displayName:user.email,
                    photoUrl:user.photoURL
                }))
          })
      };
      return (
            <div className="login">
                  <div className="container">
                        <img src="https://image.flaticon.com/icons/png/512/281/281769.png"
                        alt="gmail icon"/>
                        <Button 
                        variant='contained'
                        color='primary'
                        onClick={signIn}>Login</Button>

                  </div>
            </div>
      )
}

export default Login
