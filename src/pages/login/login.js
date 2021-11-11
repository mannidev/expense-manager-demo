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

  const onSignInEventHandler = (event) => {
    console.log(event);
  };

  const onSignUpEventHandler = (event) => {
    console.log(event);
    setOverlayClickClassName(''); setOverlayClickClassName('');
  };

  return (
    <div class={`container ${overlayClickClassName}`}>
      <SignIn onSubmit={onSignInEventHandler} />
      <SignUp onSubmit={onSignUpEventHandler} />
      <Overlay onClick={onOverlayClickEventHandler} />
    </div>
  );
}

export default Login;
