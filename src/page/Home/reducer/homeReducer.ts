export interface IInitalHomeState {
  onlineDevice?: number;
  normalDevice?: number;
}
export const initalHomeState: IInitalHomeState = {
  onlineDevice: 0,
  normalDevice: 0
};

export enum EHomeDispatchType {
  SET_DEVIECE = 'SET_DEVIECE'
}
export interface IHomeDispatchAction {
  type: EHomeDispatchType;
  onlineDevice?: number;
  normalDevice?: number;
}
export type HomeReducer = React.Reducer<IInitalHomeState, IHomeDispatchAction>

export const homeReducer: HomeReducer = (state, action) => {
  switch (action.type) {
    case EHomeDispatchType.SET_DEVIECE:
      return {
        ...state,
        onlineDevice: action.onlineDevice,
        normalDevice: action.normalDevice
      };
    default:
      return state;
  }
};