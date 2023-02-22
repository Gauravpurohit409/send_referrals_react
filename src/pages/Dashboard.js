import React from 'react'
import AuthenticationAndInvitation from '../components/AuthenticationAndInvitation'
import ReferalList from '../components/ReferalList'
import { getAllUsers, inviteNewUser } from '../services/UserService'
import { ACTION_TYPES } from '../utils'
import "./dashboardStyle.css"

export default function Dashboard() {
  const [userList, setUserList] = React.useState([]);
  const [isAuthenticated, setisAuthenticated] = React.useState(localStorage.getItem("token"))

  async function countList() {
    const newUserList = await getAllUsers();
    setUserList(newUserList);
  }

  async function inviteUser(values) {
    const response = await inviteNewUser(values);
    await countList();
  }

React.useEffect(() => {

  if (isAuthenticated)
  {
    if (userList.length === 0)
      countList();

  }
  else {
    window.location.replace("/login");
  }
     
}, [])

  return (

isAuthenticated ? ( 
        <div className="dashBoardWrapper">
        <AuthenticationAndInvitation 
            title = "Send Invitation"
            btnText = "Invite" 
            authenticationType= {ACTION_TYPES.SENDINVITE}
            handleSubmit = {(values) => inviteUser(values)}
        />
        <div className="referalCount">
            Referal Count: {userList.length}
        </div>
        <div className="referalList">
            <ReferalList userList = {userList}/>
        </div>
        </div>
        ) : <div></div>
    
  )
}
