import React from 'react';
import './sign-up-style.css';

import SocialMediaHandles from '../social-media/SocialMediaHandles';
import LoginForm from '../login-form/LoginForm';
import Button from '../button/Button';

function SignUp(props) {
  return (
    <LoginForm classNames="sign-up-container">
      <h1>Create Account</h1>
      <SocialMediaHandles />
      <span>or use your email for registration</span>
      <input className="input" type="text" placeholder="Name" />
      <input className="input" type="email" placeholder="Email" />
      <input className="input" type="password" placeholder="Password" />
      <Button label="Sign Up" />
    </LoginForm>
  );
}

export default SignUp;
