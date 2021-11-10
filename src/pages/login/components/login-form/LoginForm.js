import React from 'react';
import './login-form.css';

function LoginForm(props) {
  return (
    <div className={`form-container ${props.classNames}`}>
      <form className="form">{props.children}</form>
    </div>
  );
}

export default LoginForm;
