import React from 'react';
import styles from './side-panel.module.css';
import SideNav from '../../components/side-nav/SideNav';

function SidePanel({ children }) {
  return (
    <section className={styles.container}>
      <SideNav />
      {children}
    </section>
  );
}

export default SidePanel;
