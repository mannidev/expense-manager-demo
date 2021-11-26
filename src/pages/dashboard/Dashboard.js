import './dashboard.css';
import React, { Fragment } from 'react';
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
import SidePanel from '../../components/side-panel/SidePanel';
import Header from './components/header/Header';
import MainContent from '../../components/main-content/MainContent';

function Dashboard() {
  return (
    <Fragment>
      <SidePanel>
        <div className="main-nav">
          <NavLink to="/dashboard" className="link-item">
            <FontAwesomeIcon className="fa" icon={faHome} />
            <div className="nav-text">Dashboard</div>
          </NavLink>

          <NavLink to="/expense" className="link-item">
            <FontAwesomeIcon className="fa" icon={faMoneyBillWaveAlt} />
            <div className="nav-text">Expenses</div>
          </NavLink>

          <NavLink to="" className="link-item">
            <FontAwesomeIcon className="fa" icon={faTasks} />
            <div className="nav-text">Tasks</div>
          </NavLink>

          <NavLink to="" className="link-item">
            <FontAwesomeIcon className="fa" icon={faBook} />
            <div className="nav-text">Library</div>
          </NavLink>

          <NavLink to="" className="link-item">
            <FontAwesomeIcon className="fa" icon={faPenFancy} />
            <div className="nav-text">Journal</div>
          </NavLink>

          <div className="logout">
            <NavLink to="" className="link-item">
              <FontAwesomeIcon className="fa" icon={faPowerOff} />
              <div className="nav-text">Logout</div>
            </NavLink>
          </div>
        </div>
      </SidePanel>
      <MainContent>there</MainContent>
    </Fragment>
  );
}

export default Dashboard;
