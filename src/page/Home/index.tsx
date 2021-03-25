/**
 * @file 监控系统首页
 * @author Felix
 */

import React, { useReducer, useEffect, useRef } from 'react';
import axios from 'axios';

import Header from './components/Header';
import DeviceDetails from './components/DeviceDetails';
import RealTimeData from './components/RealTimeData';
import AlarmRecord from './components/AlarmRecord';
import HistoricalData from './components/HistoricalData';

import { HomeReducer, initalHomeState, homeReducer, EHomeDispatchType } from './reducer/homeReducer';
import { data } from './mock';

import './index.css';

const Home = () => {
  const [homeState, homeDispatch] = useReducer<HomeReducer>(homeReducer, initalHomeState);
  const loopTimer = useRef<any>(null);
  
  const {
    onlineDevice = 0,
    normalDevice = 0,
    currentDevice = 1,
    deviceDataList = []
  } = homeState;

  const getData = () => {
    axios.get('http://[2001:da8:270:2020:f816:3eff:feb5:455]/tower-server/tower/getDeviceData').then(res => {
      homeDispatch({
        type: EHomeDispatchType.SET_DEVIECE,
        onlineDevice: 4,
        normalDevice: 4,
        deviceDataList: res.data.data
      });
    });
  };

  useEffect(() => {
    getData();

    loopTimer.current = setInterval(() => {
      getData();
    }, 20000);

    return () => {
      clearInterval(loopTimer.current);
    };
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
        {/* 报警记录 */}
        <AlarmRecord
          currentDevice={currentDevice}
          deviceDataList={deviceDataList}
        />
        {/* 历史记录 */}
        <HistoricalData
          normalDevice={normalDevice}
          currentDevice={currentDevice}
          deviceDataList={deviceDataList}
        />
      </div>
    </div>
  );
};

export default Home;