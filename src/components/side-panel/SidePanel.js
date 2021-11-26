import React from 'react';
import styles from './side-panel.module.css';

function SidePanel({ children }) {
  return <section className={styles.container}>{children}</section>;
}

export default SidePanel;
