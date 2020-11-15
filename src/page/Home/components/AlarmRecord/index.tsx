/**
 * @file 报警记录
 * @author Felix
 */

import React, { memo, useState, useEffect, Fragment } from 'react';
import { Modal, Button, Tag } from 'antd';

import Card from '../Card';
import AlarmPie from '../AlarmPie';

import { getCurrentData, getAlarmData } from '../../common/utils';

import {
  DEVICE_NUMBER,
  DEVICE_COLOR,
  TABLE_ALARM_VALUE,
  ETableDataName,
  TABLE_TAG_COLOR
} from '../../common/constants';

import './index.css';

interface IAlarmRecord {
  currentDevice: number;
  deviceDataList: Array<any>;
}

const AlarmRecord: React.FC<IAlarmRecord> = (props) => {
  const { currentDevice, deviceDataList } = props;
  const [alarmData, setAlarmData] = useState<Array<any>>([]);
  const [modalStatus, setModalStatus] = useState<boolean>(false);
  const [pieData, setPieData] = useState<Array<{type: string, value: number}>>([]);

  useEffect(() => {
    if (!deviceDataList.length) {
      return;
    }
    const newAlarmData = getAlarmData(deviceDataList).reverse();
    setAlarmData(newAlarmData);
    setPieData(Array.from({ length: DEVICE_NUMBER }).map((item, index) => {
      return {
        type: `${index + 1}号设备`,
        value: getCurrentData(newAlarmData, index + 1).length
      }
    }));
  }, [deviceDataList]);

  return (
    <Card title={'报警记录'}>
      <Button
        className="alarm-record-btn"
        type={'primary'}
        onClick={() => setModalStatus(true)}
      >
        查看详情
      </Button>
      <div className="alarm-record-pie">
        <AlarmPie pieData={pieData} />
      </div>
      <Modal
        title="记录详情"
        visible={modalStatus}
        onCancel={() => setModalStatus(false)}
        footer={[
          <Button key="back" onClick={() => setModalStatus(false)}>
            关闭
          </Button>
        ]}
      >
        <div className="alarm-record-modal-inner">
          {
            alarmData.map((item, index) => {
              const textTag = [];
              item[ETableDataName.pitch] >= TABLE_ALARM_VALUE[ETableDataName.pitch] && textTag.push(ETableDataName.pitch);
              item[ETableDataName.roll] >= TABLE_ALARM_VALUE[ETableDataName.roll] && textTag.push(ETableDataName.roll);
              item[ETableDataName.yow] >= TABLE_ALARM_VALUE[ETableDataName.yow] && textTag.push(ETableDataName.yow);

              return (
                <div
                  key={`alarm-record-modal-item-${index}`}
                  className="alarm-record-modal-item"
                >
                  <Tag color={DEVICE_COLOR[item.deviceId - 1]}>
                    {item.deviceId}号设备
                  </Tag>
                  <div className="alarm-record-modal-item-text">
                    事件类型：
                    {textTag.map(
                      (tag, index) => {
                        return (
                          <Tag
                            key={`alarm-record-modal-item-tag-${tag}-${index}`}
                            color={TABLE_TAG_COLOR[tag]}
                          >
                            {ETableDataName[tag]}值
                          </Tag>
                          )
                      }
                    )}
                    异常——输电杆塔存在倾斜情况
                  </div>
                  <div className="alarm-record-modal-item-text">
                    报警时间：{item.time}
                  </div>
                </div>
              );
            })
          }
        </div>
      </Modal>
    </Card>
  );
};

export default memo(AlarmRecord);