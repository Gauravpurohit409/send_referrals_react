// import { Password } from '@mui/icons-material'
import React from 'react'
import AuthenticationAndInvitation from '../components/AuthenticationAndInvitation'
import { createUser } from '../services/UserService'
import { ACTION_TYPES } from '../utils'

export default function Signup() {

  const createNewUser = (values) => {createUser(values)}

  return (
    <div>
        <AuthenticationAndInvitation 
            title = "Signup"
            btnText = "Signup" 
            authenticationType= {ACTION_TYPES.SIGNUP}
            handleSubmit = {(values) => createNewUser(values)}
        />
    </div>
  )
}
