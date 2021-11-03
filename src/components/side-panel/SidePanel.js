import React from 'react';
import styles from './side-panel.module.css';

function SidePanel(props) {
  const display = props.display === 'hide' ? styles.hide : styles.show;
  return <section className={`${styles.container} ${display}`}>{props.children}</section>;
}

export default SidePanel;
