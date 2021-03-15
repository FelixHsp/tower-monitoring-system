export const DEVICE_DETAILS_INFO_TITLE = '基于IPv6和LPWAN技术的输电杆塔倾斜度监测预警与管理系统';
export const DEVICE_DETAILS_INFO_DESC = '所属用户：东北农业大学';

export const DEVICE_NUMBER = 4;

export enum ETableDataName {
  yaw = 'yaw',
  roll = 'roll',
  pitch = 'pitch'
}
export const TABLE_TAG_COLOR = {
  [ETableDataName.yaw]: 'blue',
  [ETableDataName.roll]: 'geekblue',
  [ETableDataName.pitch]: 'purple'
};
export const TABLE_ALARM_VALUE = {
  [ETableDataName.yaw]: 10,
  [ETableDataName.roll]: 10,
  [ETableDataName.pitch]: 10
};

export const DEVICE_COLOR = ['volcano', 'orange', 'magenta', 'geekblue']