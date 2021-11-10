import React, {useState} from 'react';
import style from './overlay-style.module.css';

import Button from '../button/Button';

function Overlay(props) {
  const [activatePanel, setActivatePanel] = useState('');
  const onSignUpClickEventHandler = () => {
    setActivatePanel('right-panel-active');
  };
  return (
    <div className={style['overlay-container']}>
      <div className={style.overlay}>
        <div className={`${style['overlay-panel']} ${style['overlay-left']}`}>
          <h1>Welcome Back!</h1>
          <p>To keep connected with us please login with your personal info</p>
          <Button label="Sign In" classes="ghost" />
        </div>
        <div className={`${style['overlay-panel']} ${style['overlay-right']}`}>
          <h1>Hello, Friend!</h1>
          <p>Enter your personal details and start journey with us</p>
          <Button
            label="Sign Up"
            classes="ghost"
            onClick={onSignUpClickEventHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default Overlay;
