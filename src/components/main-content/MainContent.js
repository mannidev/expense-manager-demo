import React from 'react';
import styles from './main-content.module.css';

function MainContent(props) {
  const display = props.display === 'hide' ? styles.hide : styles.show;
  return (
    <div className={`${styles.container} ${display}`}>{props.children}</div>
  );
}

export default MainContent;
