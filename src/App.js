import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Imessage from './Components/Imessage';
import { logIn, logOut, selectUser } from './features/UserSlice';
import { auth } from './FireBase';
import Login from './Components/login/Login';
const App = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          logIn({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            name: authUser.displayName,
          })
        );
      } else {
        dispatch(logOut());
      }
    });
  }, []);
  return <div>{user ? <Imessage /> : <Login />}</div>;
};

export default App;
