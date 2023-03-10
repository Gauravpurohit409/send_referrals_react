import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios, * as others from 'axios';
import { ACTION_TYPES } from '../utils';

const theme = createTheme();

export default function UpdatePassword({
  handleSubmit
}) {

  const [email, setEmail] = React.useState();
  const [invitationToken, setInvitationToken] = React.useState();
  
  React.useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    setEmail(searchParams.get('email'));
    setInvitationToken(searchParams.get('invitation_token'));
  }, [])
  
  const submitForm = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    
    handleSubmit({
      invitation_token: invitationToken,
      email: email,
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
          <Typography component="h1" variant="h5">
            Update your password
          </Typography>
          <Box component="form" noValidate onSubmit={submitForm} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label={email}
                  name="email"
                  autoComplete="email"
                  disabled
                />
              </Grid>
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
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Update
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}