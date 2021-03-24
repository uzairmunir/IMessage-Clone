import { Avatar, IconButton } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { RateReviewOutlined } from '@material-ui/icons';
import './sidebar.css';
import SideBarChat from './SideBarChat';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/UserSlice';
import db, { auth } from '../../FireBase';

const SideBar = () => {
  const user = useSelector(selectUser);
  const [chats, setChats] = useState([]);
  useEffect(() => {
    db.collection('chats').onSnapshot((snapShot) =>
      setChats(snapShot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
  }, []);

  const addChat = () => {
    const chatName = prompt('Enter Chat Name');
    if (chatName) {
      db.collection('chats').add({
        chatName: chatName,
      });
    }
  };
  return (
    <div className='sidebar'>
      <div className='sidebar-header'>
        <Avatar
          src={user.photo}
          onClick={() => auth.signOut()}
          className='avatar'
        />
        <div className='sidebar-input'>
          <SearchIcon />
          <input type='text' placeholder='search' />
        </div>
        <IconButton onClick={addChat}>
          <RateReviewOutlined />
        </IconButton>
      </div>
      <div className='sidebar-chats'>
        {chats.map(({ id, data: { chatName } }) => (
          <SideBarChat key={id} id={id} chatName={chatName} />
        ))}
      </div>
    </div>
  );
};

export default SideBar;
