import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
// import EmailIcon from '@mui/icons-material/Email';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios, * as others from 'axios';
import { ACTION_TYPES } from '../utils';

const theme = createTheme();

export default function AuthenticationAndInvitation({
  title,
  btnText,
  authenticationType,
  handleSubmit
}) {

  async function logout(event){

    // make api call for logout
    const sign_out_url = "http://localhost:3000/api/sign_out";
    const headers = localStorage.getItem("headers")
    const response = await axios.delete(sign_out_url, {headers: headers} )
                     .then(function (response) {
                      alert("Logout Successfully");
                      window.location.replace("/login");
                     })
                     .catch(function (error) {
                      window.location.replace("/login");
                  });
                  
    localStorage.clear()
  }

  const submitForm = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    handleSubmit({
      email: data.get('email'),
      password: data.get('password'),
      confirm_password: data.get('confirm_password')
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            {
                authenticationType === ACTION_TYPES.SENDINVITE ? <EmailIcon /> : <LockOutlinedIcon />
            }
          </Avatar> */}
          <Typography component="h1" variant="h5">
            {title}
          </Typography>
          <Box component="form" noValidate onSubmit={submitForm} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              {
                authenticationType !== ACTION_TYPES.SENDINVITE &&
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
              }
              {
                authenticationType === ACTION_TYPES.SIGNUP &&
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="confirm_password"
                    label="Confirm Password"
                    type="password"
                    id="confirm_password"
                    autoComplete="confirm-password"
                  />
                </Grid>
              }
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {btnText}
            </Button>

            {
              authenticationType === ACTION_TYPES.SENDINVITE && 
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick = {logout}
               >
                Log out
            </Button>

            }
            {
              authenticationType === ACTION_TYPES.SIGNUP && 
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="http://localhost:3001/login" variant="body2">
                    Already have an account? Log in
                  </Link>
                </Grid>
              </Grid>
            }

            {
              authenticationType === ACTION_TYPES.LOGIN && 
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="http://localhost:3001/signup" variant="body2">
                    SIGNUP
                  </Link>
                </Grid>
              </Grid>
            }
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}