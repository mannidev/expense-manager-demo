import React from 'react';
import './overlay-style.css';

import Button from '../button/Button';

function Overlay(props) {
  const onSignUpClickEventHandler = (event) => {
    event.preventDefault();
    props.onClick('right-panel-active');
  };

  const onSignInClickEventHandler = (event) => {
    event.preventDefault();
    props.onClick('');
  };

  return (
    <div className="overlay-container">
      <div className="overlay">
        <div className="overlay-panel overlay-left">
          <h1>Welcome Back!</h1>
          <p>To keep connected with us please login with your personal info</p>
          <Button
            label="Sign In"
            classes="ghost"
            onClick={onSignInClickEventHandler}
          />
        </div>
        <div className="overlay-panel overlay-right">
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
