import React from 'react';

import Card from '../Card';

import {
  DEVICE_DETAILS_INFO_TITLE,
  DEVICE_DETAILS_INFO_DESC
} from '../../common/constants';

import './index.css';

const DeviceDetails = () => {
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
    </Card>
  );
};

export default DeviceDetails;