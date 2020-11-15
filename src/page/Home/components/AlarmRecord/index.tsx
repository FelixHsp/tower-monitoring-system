/**
 * @file 报警记录
 * @author Felix
 */

import React, { memo, useState, useEffect, Fragment } from 'react';

import Card from '../Card';
import AlarmPie from '../AlarmPie';

import { getCurrentData, getAlarmData } from '../../common/utils';

import { DEVICE_NUMBER } from '../../common/constants';

import './index.css';

interface IAlarmRecord {
  currentDevice: number;
  deviceDataList: Array<any>;
}

const AlarmRecord: React.FC<IAlarmRecord> = (props) => {
  const { currentDevice, deviceDataList } = props;
  const [alarmData, setAlarmData] = useState<Array<{}>>([]);
  const [pieData, setPieData] = useState<Array<{type: string, value: number}>>([]);

  useEffect(() => {
    if (!deviceDataList.length) {
      return;
    }
    const newAlarmData = getAlarmData(deviceDataList);
    setAlarmData(newAlarmData);
    setPieData(Array.from({ length: DEVICE_NUMBER }).map((item, index) => {
      return {
        type: `${index + 1}号设备`,
        value: getCurrentData(newAlarmData, index + 1).length
      }
    }));
  }, [deviceDataList]);

  return (
    <Card title={'报警记录'}>
      <div onClick={() => {console.log(111)}}>
        <AlarmPie pieData={pieData} />
      </div>
    </Card>
  );
};

export default memo(AlarmRecord);