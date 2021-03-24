import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import db from '../../FireBase';
import './sideBarChat.css';
import { setChat } from './../../features/ChatSlice';
import * as timeago from 'timeago.js';

const SideBarChat = ({ id, chatName }) => {
  const [chatInfo, setChatInfo] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    db.collection('chats')
      .doc(id)
      .collection('messages')
      .orderBy('timeStamp', 'desc')
      .onSnapshot((snapShot) =>
        setChatInfo(snapShot.docs.map((doc) => doc.data()))
      );
  }, [id]);
  return (
    <div
      onClick={() => dispatch(setChat({ chatId: id, chatName: chatName }))}
      className='sidebar-chat'
    >
      <Avatar src={chatInfo[0]?.photo} />
      <div className='sidebar-chat-info'>
        <h4>{chatName}</h4>
        <p>{chatInfo[0]?.message}</p>
        <small>
          {timeago.format(new Date(chatInfo[0]?.timeStamp?.toDate()))}
        </small>
      </div>
    </div>
  );
};

export default SideBarChat;
