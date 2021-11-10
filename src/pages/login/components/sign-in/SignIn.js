import React from 'react';
import style from './sign-in-style.module.css';

import SocialMediaHandles from '../social-media/SocialMediaHandles';
import Button from '../button/Button';

function SignIn(props) {
  return (
    <div className={`${style['form-container']} ${style['sign-in-container']}`}>
      <form className={style.form} action="#">
        <h1>Sign in</h1>
        <SocialMediaHandles />
        <span>or use your account</span>
        <input className={style.input} type="email" placeholder="Email" />
        <input className={style.input} type="password" placeholder="Password" />
        <a href="#">Forgot your password?</a>
        <Button label="Sign In" />
      </form>
    </div>
  );
}

export default SignIn;
