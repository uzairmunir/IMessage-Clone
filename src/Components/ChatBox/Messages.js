import { Avatar } from '@material-ui/core';
import React, { forwardRef } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/UserSlice';
import './message.css';
const Messages = forwardRef(
  ({ id, content: { timeStamp, name, photo, email, uid, message } }, ref) => {
    const user = useSelector(selectUser);
    return (
      <div
        ref={ref}
        className={`message ${user.email === email && 'message-sender'}`}
      >
        <Avatar src={photo} />
        <p>{message}</p>
        <small>{new Date(timeStamp?.toDate()).toLocaleString()}</small>
      </div>
    );
  }
);

export default Messages;
