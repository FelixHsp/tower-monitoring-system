/**
 * @file 设备详情
 * @author Felix
 */

import React, { memo } from 'react';

import Card from '../Card';
import DeviceProgress from '../DeviceProgress';

import {
  DEVICE_DETAILS_INFO_TITLE,
  DEVICE_DETAILS_INFO_DESC,
  DEVICE_NUMBER
} from '../../common/constants';

import './index.css';

interface IDeviceDetails {
  onlineDevice: number;
  normalDevice: number;
}

const DeviceDetails: React.FC<IDeviceDetails> = (props) => {
  const { onlineDevice, normalDevice } = props;

  return (
    <Card title={'设备详情'}>
      <div className="device-details-info-wrapper">
        <div className="device-details-img" />
        <div className="device-details-info">
          <div className="device-details-info-text">
            {DEVICE_DETAILS_INFO_TITLE}
          </div>
          <div className="device-details-info-text">
            {DEVICE_DETAILS_INFO_DESC}
          </div>
        </div>
      </div>
      <div className="device-details-number-wrapper">
        <DeviceProgress
          moleculeNumber={onlineDevice}
          denominatorNumber={DEVICE_NUMBER}
          title={'在线设备（个数）'}
        />
        <DeviceProgress
          moleculeNumber={normalDevice}
          denominatorNumber={onlineDevice}
          title={'正常状态设备（个数）'}
        />
      </div>
    </Card>
  );
};

export default memo(DeviceDetails);