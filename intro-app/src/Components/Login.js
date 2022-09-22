import React from 'react';
import './Login.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
//Create base layout for the login ( email box, password box, login button, basic styling ),
// you should use a UI Library like mui or ant.

function Login() {
  return (
    <div className="Login">
        <h1>LOGIN</h1>
      <TextField id="outlined-basic" label="Email" variant="outlined" />
      <TextField id="outlined-basic" label="Password" variant="outlined" />
      <Button variant="contained">Login</Button>
    </div>
  );
}

export default Login;
