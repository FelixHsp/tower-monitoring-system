/**
 * @file 监控系统首页
 * @author Felix
 */

import React, { useReducer, useEffect } from 'react';

import Header from './components/Header';
import DeviceDetails from './components/DeviceDetails';
import Card from './components/Card';

import { HomeReducer, initalHomeState, homeReducer, EHomeDispatchType } from './reducer/homeReducer';

import './index.css';

const Home = () => {
  const [homeState, homeDispatch] = useReducer<HomeReducer>(homeReducer, initalHomeState);
  
  const {
    onlineDevice = 0,
    normalDevice = 0
  } = homeState;

  useEffect(() => {
    // 模拟网络请求
    setTimeout(() => {
      homeDispatch({
        type: EHomeDispatchType.SET_DEVIECE,
        onlineDevice: 4,
        normalDevice: 4
      });
    }, 500);
  }, []);

  return (
    <div className="home-container">
      <Header />
      <div className="home-inner">
        <DeviceDetails
          onlineDevice={onlineDevice}
          normalDevice={normalDevice}
        />
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