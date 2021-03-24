import { Button } from '@material-ui/core';
import React from 'react';
import { auth, provider } from './../../FireBase';
import './login.css';
const LogIn = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };
  return (
    <div className='login'>
      <div>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/5/56/IMessage_logo_%28Apple_Inc.%29.png'
          alt='logo'
        />
        <h2>iMessage</h2>
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
};

export default LogIn;
