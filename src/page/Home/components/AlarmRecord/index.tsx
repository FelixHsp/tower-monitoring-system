/**
 * @file 实时数据
 * @author Felix
 */

import React, { memo, useState, useEffect, Fragment } from 'react';

import Card from '../Card';

import './index.css';

interface IAlarmRecord {
  currentDevice: number;
}

const AlarmRecord: React.FC<IAlarmRecord> = (props) => {
  useEffect(() => {
    
  }, []);

  return (
    <Card title={'报警记录'}>
      
    </Card>
  );
};

export default memo(AlarmRecord);