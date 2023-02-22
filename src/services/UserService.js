// import axios from 'axios';
// const axios = require('axios');
import axios, * as others from 'axios';

export async function getAllUsers() {

    try{
        const headers = localStorage.getItem("headers")
        const url = "http://localhost:3000/api/referrals";

        const response = await axios.get(url, {headers: headers} );
        return response.data;
    }catch(error) {
        console.log("Error is "+error.response.data.error)
        return [];
    }
    
}

export async function inviteNewUser(data){
    const headers = localStorage.getItem("headers");
    const url = "http://localhost:3000/api/referrals/send_invite";
    
    const response = axios.get(url, {
        headers: headers,
        params: {
            new_user_email: data.email,
        }
    })
    .then(function (response) {
        localStorage.setItem("headers", response.headers)
        window.location.replace("/dashboard");
    })
    .catch(function (error) {
        alert(error.response.data.message.email);
    });   
}

export async function isAuthenticated(data){
    const url = "http://localhost:3000/api/sign_in";
    
    const response = axios.post(url,  {
        email: data.email,
        password: data.password
    })
    .then(function (response) {
        localStorage.setItem("token", true);
        localStorage.setItem("headers", response.headers);
        window.location.replace("/dashboard");
    })
    .catch(function (error) {
        alert(error.response.data.errors[0]);
    });   
}

export async function createUser(data) {

    const url = "http://localhost:3000/api";
    
      const response = axios.post(url, {
            email: data.email,
            password: data.password,
            password_confirmation: data.password_confirmation,
            confirm_success_url: "https://chat.openai.com/chat"
        })
        .then(function (response) {
            window.location.replace("/login");
        })
        .catch(function (error) {
            if ("errors" in error.response.data)
                alert(error.response.data.errors.full_messages)
            else
                alert(error.response.data.message);
        });
}

//function to update invited user's password
export async function acceptInvitation(data){
    const url = "http://localhost:3000/api/user/invitation";
    
    const response = axios.put(url,  {
        user:{
            email: data.email,
            password: data.password,
            confirm_password: data.confirm_password, 
            invitation_token: data.invitation_token
        }
    })
    .then(function (response) {
        alert(JSON.stringify(response.data));
        window.location.replace("/login");
    })
    .catch(function (error) {
        alert(error.response.data);
        window.location.replace("/login");
    });   
}


