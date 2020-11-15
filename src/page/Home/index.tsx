/**
 * @file 监控系统首页
 * @author Felix
 */

import React, { useReducer, useEffect } from 'react';

import Header from './components/Header';
import DeviceDetails from './components/DeviceDetails';
import RealTimeData from './components/RealTimeData';
import AlarmRecord from './components/AlarmRecord';
import Card from './components/Card';

import { HomeReducer, initalHomeState, homeReducer, EHomeDispatchType } from './reducer/homeReducer';
import { data } from './mock';

import './index.css';

const Home = () => {
  const [homeState, homeDispatch] = useReducer<HomeReducer>(homeReducer, initalHomeState);
  
  const {
    onlineDevice = 0,
    normalDevice = 0,
    currentDevice = 1,
    deviceDataList = []
  } = homeState;

  useEffect(() => {
    // 模拟网络请求
    setTimeout(() => {
      homeDispatch({
        type: EHomeDispatchType.SET_DEVIECE,
        onlineDevice: 4,
        normalDevice: 4,
        deviceDataList: data
      });
    }, 500);
  }, []);

  return (
    <div className="home-container">
      <Header />
      <div className="home-inner">
        {/* 设备详情 */}
        <DeviceDetails
          onlineDevice={onlineDevice}
          normalDevice={normalDevice}
        />
        {/* 实时数据 */}
        <RealTimeData
          currentDevice={currentDevice}
          normalDevice={normalDevice}
          deviceDataList={deviceDataList}
          homeDispatch={homeDispatch}
        />
        <AlarmRecord
          currentDevice={currentDevice}
        />
        <Card title={'历史数据'}>

        </Card>
      </div>
    </div>
  );
};

export default Home;