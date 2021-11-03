import React, { Fragment } from 'react';
import './login-style.css';

import SignIn from './components/sign-in/SignIn';
import SignUp from './components/sign-up/SignUp';
import Overlay from './components/overlay/Overlay';

function Login(props) {
  const display = props.display === 'hide' ? hide : '';
  return (
    <Fragment>
      <SignIn />
      <SignUp />
      <Overlay />
    </Fragment>
  );
}

export default Login;
