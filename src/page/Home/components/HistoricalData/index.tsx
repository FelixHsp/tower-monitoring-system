/**
 * @file 历史记录
 * @author Felix
 */

import React, { memo, useState, useEffect, Fragment } from 'react';
import { Spin } from 'antd';

import Card from '../Card';
import HistoricalLine from '../HistoricalLine';

import { getCurrentData } from '../../common/utils';

import { ETableDataName } from '../../common/constants';

import './index.css';

interface IHistoricalData {
  normalDevice: number;
  currentDevice: number;
  deviceDataList: Array<any>;
}

const HistoricalData: React.FC<IHistoricalData> = (props) => {
  const { normalDevice, currentDevice, deviceDataList } = props;
  const [lineData, setLineData] = useState<Array<{}>>([]);

  useEffect(() => {
    if (!deviceDataList.length) {
      return;
    }
    const currentData = getCurrentData(deviceDataList, currentDevice);
    const newLineData: Array<{}> = [];
    for (let i = 0; i < currentData.length; i++) {
      const { time, pitch, yow, roll } = (currentData as any)[i];
      newLineData.push({
        time,
        value: pitch,
        category: ETableDataName['pitch']
      });
      newLineData.push({
        time,
        value: yow,
        category: ETableDataName['yow']
      });
      newLineData.push({
        time,
        value: roll,
        category: ETableDataName['roll']
      });
    }
    setLineData([]);
    setTimeout(() => {
      setLineData(newLineData);
    }, 100);
  }, [deviceDataList, currentDevice]);

  return (
    <Card title={'报警记录'}>
      <div className="historical-data-container">
        {(() => {
          if (!normalDevice) {
            return (
              <div className="home-no-data"/>
            );
          }
          if (lineData.length) {
            return (
              <HistoricalLine lineData={lineData} />
            );
          }
          return <Spin size="large" />
        })()}
      </div>
    </Card>
  );
};

export default memo(HistoricalData);