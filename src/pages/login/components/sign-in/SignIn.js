import React from 'react';
import style from './sign-in-style.module.css';

import Button from '../button/Button';

function SignIn(props) {
  return (
    <div className={`form-container ${style['sign-in-container']}`}>
      <form className={style.form} action="#">
        <h1>Sign in</h1>
        <div class="social-container">
          <a href="#" class="social">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#" class="social">
            <i class="fab fa-google-plus-g"></i>
          </a>
          <a href="#" class="social">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
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
