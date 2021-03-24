import { Grid } from '@material-ui/core';
import React from 'react';
import Chat from './ChatBox/Chat';
import './imessage.css';
import SideBar from './SideBar/SideBar';

const Imessage = () => {
  return (
    <div className='imessage'>
      <Grid container>
        <Grid item md={4} sm={4}>
          <SideBar />
        </Grid>
        <Grid item md={8} sm={8}>
          <Chat />
        </Grid>
      </Grid>
    </div>
  );
};

export default Imessage;
