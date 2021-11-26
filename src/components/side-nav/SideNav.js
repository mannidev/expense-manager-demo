import React from 'react';
import style from './side-nav.module.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavLink } from 'react-router-dom';
import {
  faHome,
  faPowerOff,
  faMoneyBillWaveAlt,
  faTasks,
  faBook,
  faPenFancy,
} from '@fortawesome/free-solid-svg-icons';

function SideNav() {
  const isActive = ({ isActive }) => {
    return isActive
      ? `${style['link-item']} ${style.active}`
      : style['link-item'];
  };

  return (
    <nav className={style['main-nav']}>
      <NavLink to="/dashboard" className={isActive}>
        <FontAwesomeIcon className={style['fa']} icon={faHome} />
        <div className={style['nav-text']}>Dashboard</div>
      </NavLink>

      <NavLink to="/expense" className={isActive}>
        <FontAwesomeIcon className={style['fa']} icon={faMoneyBillWaveAlt} />
        <div className={style['nav-text']}>Expenses</div>
      </NavLink>

      <NavLink to="task" className={isActive}>
        <FontAwesomeIcon className={style['fa']} icon={faTasks} />
        <div className={style['nav-text']}>Tasks</div>
      </NavLink>

      <NavLink to="library" className={isActive}>
        <FontAwesomeIcon className={style['fa']} icon={faBook} />
        <div className={style['nav-text']}>Library</div>
      </NavLink>

      <NavLink to="journal" className={isActive}>
        <FontAwesomeIcon className={style['fa']} icon={faPenFancy} />
        <div className={style['nav-text']}>Journal</div>
      </NavLink>

      <div className={style['logout']}>
        <NavLink to="logout" className={isActive}>
          <FontAwesomeIcon className={style['fa']} icon={faPowerOff} />
          <div className={style['nav-text']}>Logout</div>
        </NavLink>
      </div>
    </nav>
  );
}

export default SideNav;
