import React, { Fragment } from 'react';
import SidePanel from '../../components/side-panel/SidePanel';
import Header from './components/header/Header';
import MainContent from '../../components/main-content/MainContent';

function Dashboard() {
  return (
    <Fragment>
      <SidePanel>hello</SidePanel>
      <MainContent>there</MainContent>
    </Fragment>
  );
}

export default Dashboard;
