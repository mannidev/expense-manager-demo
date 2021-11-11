import React, { useReducer } from 'react';
import './sign-up-style.css';

import SocialMediaHandles from '../social-media/SocialMediaHandles';
import LoginFormModel from '../../../../model/LoginFormModel';
import LoginForm from '../login-form/LoginForm';
import Button from '../button/Button';
import FormInput from '../form-input/FormInput';

const formModel = new LoginFormModel();

const formReducer = (state, action) => {
  switch (action.type) {
    case 'Name':
      state.userName = action.value;
      return state;
    case 'Email':
      state.userEmail = action.value;
      return state;
    case 'Password':
      state.userPassword = action.value;
      return state;
    default:
      throw new Error('Error in use reducer');
  }
};

function SignUp(props) {
  const [state, formDispatch] = useReducer(formReducer, formModel);

  const inputChangeEventHandler = (event, type) => {
    formDispatch({ type, value: event.target.value });
  };

  const onClickEventHandler = (event) => {
    event.preventDefault();
    props.onSubmit(state);
  };

  return (
    <LoginForm classNames="sign-up-container">
      <h1>Create Account</h1>
      <SocialMediaHandles />
      <span>or use your email for registration</span>
      <FormInput
        type="text"
        placeholder="Name"
        onChange={(event) => inputChangeEventHandler(event, 'Name')}
      />
      <FormInput
        type="text"
        placeholder="Email"
        onChange={(event) => inputChangeEventHandler(event, 'Email')}
      />
      <FormInput
        type="text"
        placeholder="Password"
        onChange={(event) => inputChangeEventHandler(event, 'Password')}
      />
      <Button label="Sign Up" onClick={onClickEventHandler} />
    </LoginForm>
  );
}

export default SignUp;
