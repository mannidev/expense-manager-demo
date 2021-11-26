import React from 'react';
import styles from './main-content.module.css';

function MainContent({ children }) {
  return <div className={styles.container}>{children}</div>;
}

export default MainContent;
