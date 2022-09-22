import React from 'react';
import './Login.scss';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
//Create base layout for the login ( email box, password box, login button, basic styling ),
// you should use a UI Library like mui or ant.

function Login() {
  return (
    <div className="Login">
        <h1>LOGIN</h1>
      <TextField className="emailBox" label="Email" variant="outlined" />
      <TextField className="passwordBox" label="Password" variant="outlined" />
      <Button className="loginButton" variant="contained">Login</Button>
    </div>
  );
}

export default Login;
