import React, { memo } from 'react';
import { Pie } from '@ant-design/charts';

interface IAlarmPie {
  pieData: Array<{type: string, value: number}>
}

const AlarmPie: React.FC<IAlarmPie> = (props) => {
  const { pieData } = props;
  const _defineProperty = (obj: any, key: any, value: any) => {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true,
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  
  const config = _defineProperty(
    {
      width: 500,
      height: 344,
      appendPadding: 10,
      data: pieData,
      angleField: 'value',
      colorField: 'type',
      radius: 0.8,
      innerRadius: 0.6,
      interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
      statistic: {
        title: {
          offsetY: -20,
          style: { fontSize: 32 },
          formatter: function formatter(datum: any) {
            return datum ? datum.type : '总计';
          },
        },
        content: {
          offsetY: 30,
          style: { fontSize: 32 },
          formatter: function formatter(datum: any, data: any) {
            return datum
              ? `${datum.value}次`
              : `${data.reduce(function (r: any, d: any) {return r + d.value;}, 0)}次`;
          },
        },
      },
    },
    'interactions',
    [{ type: 'pie-statistic-active' }],
  );
  
  // @ts-ignore
  return <Pie {...config} />;
};
export default memo(AlarmPie);