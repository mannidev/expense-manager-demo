import React, { useState, useCallback } from 'react';
import './sign-in-style.css';

import LoginFormModel from '../../../../model/LoginFormModel';

import SocialMediaHandles from '../social-media/SocialMediaHandles';
import LoginForm from '../login-form/LoginForm';
import Button from '../button/Button';
import FormInput from '../form-input/FormInput';

function SignIn(props) {
  const [email, setEmailState] = useState('');
  const [password, setPasswordState] = useState('');

  const loginFormModel = useCallback(() => {
    return new LoginFormModel();
  }, []);

  const onSubmitEventHandler = (event) => {
    event.preventDefault();
    const form = loginFormModel();
    form.userEmail = email;
    form.userPassword = password; 
    props.onSubmit(form);
  };

  const onEmailChangeEventHandler = (event) => {
    setEmailState(event.target.value);
  };

  const onPasswordChangeEventHandler = (event) => {
    setPasswordState(event.target.value);
  };

  return (
    <LoginForm classNames="sign-in-container">
      <h1>Sign in</h1>
      <SocialMediaHandles />
      <span>or use your account</span>

      <FormInput
        type="text"
        value={email}
        placeholder="Email"
        onChange={onEmailChangeEventHandler}
      />

      <FormInput
        type="password"
        value={password}
        placeholder="Password"
        onChange={onPasswordChangeEventHandler}
      />
      <a href="#">Forgot your password?</a>
      <Button label="Sign In" onClick={onSubmitEventHandler} />
    </LoginForm>
  );
}

export default SignIn;
