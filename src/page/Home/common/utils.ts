import { TABLE_ALARM_VALUE, ETableDataName } from './constants';

export const getCurrentData = (dataList: Array<any>, currentDevice: number) => {
  return dataList.filter(data => {
    return data.deviceId === currentDevice;
  });
};

export const getAlarmData = (dataList: Array<any>) => {
  return dataList.filter(data => {
    return data[ETableDataName.yow] >= TABLE_ALARM_VALUE[ETableDataName.yow]
      || data[ETableDataName.roll] >= TABLE_ALARM_VALUE[ETableDataName.roll]
      || data[ETableDataName.pitch] >= TABLE_ALARM_VALUE[ETableDataName.pitch];
  });
};