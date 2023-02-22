import React from 'react'
import axios, * as others from 'axios';

export default function ConfirmMail() {

  async function confirmToken(data){
    // make api call for logout
    const confirmation_url = "http://localhost:3000/api/confirmation";
    const response = await axios.get(confirmation_url, {params:{
            config_name: "default",
            confirmation_token: data.confirmation_token,
            email: data.email
        }} 
        )
        .then((function (response) {
            alert("Email Verified");
            window.location.replace("/login");
        }))
        .catch(function (error) {
            alert(error.response.data.errors[0]);
        });
  }

 React.useEffect(() => {

      const searchParams = new URLSearchParams(window.location.search);
      const confirmation_token = searchParams.get('confirmation_token');
      const email = searchParams.get('email');
      
      const data = {
        confirmation_token: confirmation_token,
        email: email
      }
      
      confirmToken(data);
  
  })
  

  return (
    <div>
    </div>
  )
}
