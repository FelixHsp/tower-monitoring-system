export interface IInitalHomeState {
  onlineDevice?: number;
  normalDevice?: number;
  currentDevice?: number;
  deviceDataList?: Array<any>;
}
export const initalHomeState: IInitalHomeState = {
  onlineDevice: 0,
  normalDevice: 0,
  currentDevice: 1,
  deviceDataList: []
};

export enum EHomeDispatchType {
  SET_DEVIECE = 'SET_DEVIECE',
  SET_CURRENT_DEVICE = 'SET_CURRENT_DEVICE'
}
export interface IHomeDispatchAction {
  type: EHomeDispatchType;
  onlineDevice?: number;
  normalDevice?: number;
  currentDevice?: number;
  deviceDataList?: Array<any>;
}
export type HomeReducer = React.Reducer<IInitalHomeState, IHomeDispatchAction>

export const homeReducer: HomeReducer = (state, action) => {
  switch (action.type) {
    case EHomeDispatchType.SET_DEVIECE:
      return {
        ...state,
        onlineDevice: action.onlineDevice,
        normalDevice: action.normalDevice,
        deviceDataList: action.deviceDataList
      };
    case EHomeDispatchType.SET_CURRENT_DEVICE:
      return {
        ...state,
        currentDevice: action.currentDevice
      }
    default:
      return state;
  }
};