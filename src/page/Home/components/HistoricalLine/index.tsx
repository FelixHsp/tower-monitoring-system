import React, { memo } from 'react';
import { Line } from '@ant-design/charts';

interface IHistoricalLine {
  lineData: Array<any>
}

const HistoricalLine: React.FC<IHistoricalLine> = (props) => {
  const { lineData } = props;

  var config = {
    width: 560,
    data: lineData,
    xField: 'createDate',
    yField: 'value',
    seriesField: 'category',
    yAxis: {
      label: {
        formatter: function formatter(v: any) {
          return ''.concat(v).replace(/\d{1,3}(?=(\d{3})+$)/g, function (s) {
            return ''.concat(s, ',');
          });
        },
      },
    },
    color: ['#1979C9', '#D62A0D', '#FAA219'],
  };
  return <Line {...config} />;
};

export default memo(HistoricalLine);