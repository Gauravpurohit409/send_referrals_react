// import { Password } from '@mui/icons-material'
import React from 'react'
import AuthenticationAndInvitation from '../components/AuthenticationAndInvitation'
import { isAuthenticated } from '../services/UserService'
import { ACTION_TYPES } from '../utils'

export default function Login() {

  const handleUserLogin = (values) => {isAuthenticated(values)}

  return (
    <div>
        <AuthenticationAndInvitation 
            title = "Login"
            btnText = "Login" 
            authenticationType= {ACTION_TYPES.LOGIN}
            handleSubmit = {(values) => handleUserLogin(values)}
        />
    </div>
  )
}
