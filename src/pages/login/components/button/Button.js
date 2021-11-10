import React from 'react';
import style from './button.module.css';

function Button(props) {
  const onClickEventHandler = (event) => {
    props.onClick(event);
  };

  return (
    <button
      className={`${style.button} ${style[props.classes] || ''}`}
      onClick={onClickEventHandler}
    >
      {props.label}
    </button>
  );
}

export default Button;
