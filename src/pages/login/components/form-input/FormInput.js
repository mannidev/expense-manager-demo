import React from 'react';
import './form-input.css';

function FormInput(props) {
  const isValid = props.valid;
  return (
    <div className="input-group">
      <input
        className={`input ${props.className || ''}`}
        placeholder={props.placeholder}
        type={props.type}
        onChange={props.onChange}
      />
      {<div className="error">Invalid </div>}
    </div>
  );
}

export default FormInput;
