import './dashboard.css';
import React, { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        <nav className="main-nav">
          <ul>
            <li>
              <a href="http://justinfarrow.com">
                <FontAwesomeIcon className="fa" icon={faHome} />
              </a>
              <div className="nav-text">Dashboard</div>
            </li>

            <li class="has-subnav">
              <a href="#">
                <FontAwesomeIcon className="fa" icon={faMoneyBillWaveAlt} />
              </a>
              <div className="nav-text">Expenses</div>
            </li>

            <li class="has-subnav">
              <a href="#">
                <FontAwesomeIcon className="fa" icon={faTasks} />
              </a>
              <div className="nav-text">Tasks</div>
            </li>

            <li class="has-subnav">
              <a href="#">
                <FontAwesomeIcon className="fa" icon={faBook} />
              </a>
              <div className="nav-text">Library</div>
            </li>

            <li class="has-subnav">
              <a href="#">
                <FontAwesomeIcon className="fa" icon={faPenFancy} />
              </a>
              <div className="nav-text">Journal</div>
            </li>
          </ul>

          <ul class="logout">
            <li>
              <a href="#">
                <FontAwesomeIcon className="fa" icon={faPowerOff} />
              </a>
              <div className="nav-text">Logout</div>
            </li>
          </ul>
        </nav>
      </SidePanel>
      <MainContent>there</MainContent>
    </Fragment>
  );
}

export default Dashboard;
