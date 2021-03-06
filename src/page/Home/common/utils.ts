import { TABLE_ALARM_VALUE, ETableDataName } from './constants';

export const getCurrentData = (dataList: Array<any>, currentDevice: number) => {
  return dataList.filter(data => {
    return data.u_id == currentDevice;
  });
};

export const getAlarmData = (dataList: Array<any>) => {
  return dataList.filter(data => {
    return data[ETableDataName.yaw] >= TABLE_ALARM_VALUE[ETableDataName.yaw]
      || data[ETableDataName.roll] >= TABLE_ALARM_VALUE[ETableDataName.roll]
      || data[ETableDataName.pitch] >= TABLE_ALARM_VALUE[ETableDataName.pitch];
  });
};