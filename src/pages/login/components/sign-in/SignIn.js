import React from 'react';
import './sign-in-style.css';

import SocialMediaHandles from '../social-media/SocialMediaHandles';
import LoginForm from '../login-form/LoginForm';
import Button from '../button/Button';

function SignIn(props) {
  const onClickEventHandler = (event) => {
    event.preventDefault();
  };

  return (
    <LoginForm classNames="sign-in-container">
      <h1>Sign in</h1>
      <SocialMediaHandles />
      <span>or use your account</span>
      <input className="input" type="email" placeholder="Email" />
      <input className="input" type="password" placeholder="Password" />
      <a href="#">Forgot your password?</a>
      <Button label="Sign In" onClick={onClickEventHandler} />
    </LoginForm>
  );
}

export default SignIn;
