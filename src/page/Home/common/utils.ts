export const getCurrentData = (dataList: Array<any>, currentDevice: number) => {
  return dataList.filter(data => {
    return data.deviceId === currentDevice;
  });
};