import { Button, IconButton } from '@material-ui/core';
import { MicNone } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectChatId, selectChatName } from '../../features/ChatSlice';
import { selectUser } from '../../features/UserSlice';
import db from '../../FireBase';
import './chat.css';
import Messages from './Messages';
import firebase from 'firebase';

const Chat = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const user = useSelector(selectUser);
  const chatId = useSelector(selectChatId);
  const chatName = useSelector(selectChatName);
  useEffect(() => {
    if (chatId) {
      db.collection('chats')
        .doc(chatId)
        .collection('messages')
        .orderBy('timeStamp', 'desc')
        .onSnapshot((snapShot) =>
          setMessages(
            snapShot.docs.map((doc) => ({ id: doc.id, data: doc.data() }))
          )
        );
    }
  }, [chatId]);
  const sendMessage = (e) => {
    e.preventDefault();
    db.collection('chats').doc(chatId).collection('messages').add({
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      uid: user.uid,
      photo: user.photo,
      email: user.email,
      name: user.name,
    });
    setInput('');
  };
  return (
    <div className='chat'>
      <div className='chat-header'>
        <h4>
          To: <span className='chanel-name'>{chatName}</span>
        </h4>
        <strong>Details</strong>
      </div>
      <div className='chat-messages'>
        {/* <FlipMove> </FlipMove> */}
        {messages.map(({ id, data }) => (
          <Messages key={id} content={data} />
        ))}
      </div>
      <div className='chat-input'>
        <input
          type='text'
          placeholder='message'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <IconButton>
          <MicNone className='mic-icon' />
        </IconButton>
        <Button className='btn' onClick={sendMessage}>
          Send
        </Button>
      </div>
    </div>
  );
};

export default Chat;
