import React from 'react';

import Header from './components/Header';
import DeviceDetails from './components/DeviceDetails';
import Card from './components/Card';

import './index.css';

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <div className="home-inner">
        <DeviceDetails />
        <Card title={'实时数据'}>

        </Card>
        <Card title={'报警记录'}>

        </Card>
        <Card title={'历史数据'}>

        </Card>
      </div>
    </div>
  );
};

export default Home;