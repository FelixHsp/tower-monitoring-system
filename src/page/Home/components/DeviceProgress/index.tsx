/**
 * @file 设备详情状态条
 * @author Felix
 */

import React, { memo } from 'react';
import { Progress } from 'antd';

import './index.css';

interface IDeviceProgress {
  moleculeNumber: number;
  denominatorNumber: number;
  title: string;
}

const DeviceProgress: React.FC<IDeviceProgress> = (props) => {
  const { moleculeNumber, denominatorNumber, title } = props;

  return (
    <div className="device-details-number-progress">
      <Progress
        type="circle"
        width={150}
        percent={(moleculeNumber / denominatorNumber) * 100}
        format={() => `${moleculeNumber}/${denominatorNumber}`}
      />
      <div className="device-details-number-progress-title">
        {title}
      </div>
    </div>
  );
};

export default memo(DeviceProgress);