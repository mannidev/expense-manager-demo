import React, { useState } from 'react';
import './login-style.css';

import SignIn from './components/sign-in/SignIn';
import SignUp from './components/sign-up/SignUp';
import Overlay from './components/overlay/Overlay';

function Login(props) {
  const [overlayClickClassName, setOverlayClickClassName] = useState('');
  const display = props.display === 'hide' ? hide : '';

  const onOverlayClickEventHandler = (event) => {
    setOverlayClickClassName(event);
  };

  return (
    <div class={`container ${overlayClickClassName}`}>
      <SignIn />
      <SignUp />
      <Overlay onClick={onOverlayClickEventHandler} />
    </div>
  );
}

export default Login;
