/**
 * @file 实时数据
 * @author Felix
 */

import React, { memo, useState, useEffect, Fragment } from 'react';
import { Select, Table, Tag, Spin } from 'antd';

import Card from '../Card';

import { EHomeDispatchType, IHomeDispatchAction } from '../../reducer/homeReducer';
import { getCurrentData } from '../../common/utils';

import {
  TABLE_TAG_COLOR,
  ETableDataName,
  TABLE_ALARM_VALUE
} from '../../common/constants';

import './index.css';

const { Option } = Select;
const { Column } = Table;

interface IRealTimeData {
  currentDevice: number;
  normalDevice: number;
  deviceDataList: Array<any>;
  homeDispatch: React.Dispatch<IHomeDispatchAction>;
}

const RealTimeData: React.FC<IRealTimeData> = (props) => {
  const { currentDevice, normalDevice, deviceDataList, homeDispatch } = props;
  const [tableData, setTableData] = useState<Array<{}>>([]);

  const onSelect = (value: number) => {
    homeDispatch({
      type: EHomeDispatchType.SET_CURRENT_DEVICE,
      currentDevice: value
    });
  };

  const formatData = (deviceDataList: Array<any>, currentDevice: number) => {
    const currentData = getCurrentData(deviceDataList, currentDevice);
    const realTimeData = currentData[currentData.length - 1];
    return [
      {
        key: '1',
        dataName: 'yow',
        currentValue: realTimeData.yow
      },
      {
        key: '2',
        dataName: 'roll',
        currentValue: realTimeData.roll
      },
      {
        key: '3',
        dataName: 'pitch',
        currentValue: realTimeData.pitch
      }
    ];
  };

  useEffect(() => {
    if (!normalDevice || !deviceDataList.length) {
      return;
    }
    setTableData([]);
    setTimeout(() => {
      setTableData(formatData(deviceDataList, currentDevice));
    }, 100);
  }, [currentDevice, normalDevice, deviceDataList]);

  return (
    <Card title={'实时数据'}>
      <div className="real-time-data-select-wrapper">
        <div className="real-time-data-select-title">
          从机名称：
        </div>
        <Select
          value={normalDevice ? currentDevice : undefined}
          style={{ width: 120 }}
          onChange={onSelect}>
          {
            Array.from({ length: normalDevice }).map(
              (value, index) => {
                return (
                  <Option
                    key={`real-time-data-select-option-${index}`}
                    value={index + 1}
                  >
                    {index + 1}号设备
                  </Option>
                );
              }
            )
          }
        </Select>
      </div>
      <div className="real-time-data-table-wrapper">
        {
          (() => {
            if (!normalDevice) {
              return (
                <div className="home-no-data"/>
              );
            }
            if (tableData.length) {
              return (
                <Table
                  dataSource={tableData}
                  pagination={false}
                >
                  <Column
                    title="数据点名称"
                    dataIndex="dataName"
                    key="dataName"
                    render={(value: ETableDataName) => {
                      return (
                        <Tag color={TABLE_TAG_COLOR[value]} key={value}>
                          {value}
                        </Tag>
                      );
                    }}
                  />
                  <Column
                    title="当前值"
                    dataIndex="currentValue"
                    key="currentValue"
                    render={(value, obj: {dataName: ETableDataName}) => {
                      return (
                        <span className={`real-time-data-table-value ${value >= TABLE_ALARM_VALUE[obj.dataName] ? 'alarm' : 'default'}`}>
                          {value}
                        </span>
                      );
                    }}
                  />
                  <Column
                    title="报警值"
                    dataIndex="alarmValue"
                    key="alarmValue"
                    render={(value, obj: {dataName: ETableDataName}) => {
                      return (
                        <Fragment>
                          {TABLE_ALARM_VALUE[obj.dataName]}
                        </Fragment>
                      );
                    }}
                  />
                </Table>
              );
            }
            return <Spin size="large" />
          })()
        }
      </div>
    </Card>
  );
};

export default memo(RealTimeData);