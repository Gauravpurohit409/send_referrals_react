// import { Password } from '@mui/icons-material'
import React from 'react'
import UpdatePassword from '../components/UpdatePassword'
import { acceptInvitation } from '../services/UserService'
import { ACTION_TYPES } from '../utils'

export default function AcceptInvitation() {

  const handlePasswordUpdate = (values) => {acceptInvitation(values)}

  return (
    <div>
        <UpdatePassword 
            handleSubmit = {(values) => handlePasswordUpdate(values)}
        />
    </div>
  )
}
