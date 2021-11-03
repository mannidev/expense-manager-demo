import React from 'react';
import style from './button.module.css';

function Button(props) {
  return <button className={style.button}>{props.label}</button>;
}

export default Button;
