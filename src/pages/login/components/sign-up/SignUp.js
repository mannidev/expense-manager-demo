import React from 'react';
import style from './sign-up-style.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faGooglePlusG,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

import Button from '../button/Button';

function SignUp(props) {
  return (
    <div className={`form-container ${style['sign-up-container']}`}>
      <form className={style.form} action="#">
        <h1>Create Account</h1>
        <div class="social-container">
          <a href="#" class="social">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="#" class="social">
            <FontAwesomeIcon icon={faGooglePlusG} />
          </a>
          <a href="#" class="social">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
        </div>
        <span>or use your email for registration</span>
        <input className={style.input} type="text" placeholder="Name" />
        <input className={style.input} type="email" placeholder="Email" />
        <input className={style.input} type="password" placeholder="Password" />
        <Button label="Sign Up" />
      </form>
    </div>
  );
}

export default SignUp;
