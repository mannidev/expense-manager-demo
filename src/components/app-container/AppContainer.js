import React from 'react';
import './app-container.css';

function AppContainer(props) {
  return (
    <div className="main-content">{props.children}</div>
  );
}

export default AppContainer;
