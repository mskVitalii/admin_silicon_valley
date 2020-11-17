import React from 'react';
// import PropTypes from 'prop-types';
import { Funnel } from '@ant-design/charts';

const ChartsCampaignsFunel = () => {
  var data = [
    {
      stage: 'Подписки',
      number: 253,
    }, {
      stage: 'Покупки',
      number: 151,
    }, {
      stage: 'Продажи товаров',
      number: 113,
    }, {
      stage: 'Продажи услуг',
      number: 87,
    }, 
  ];
  var config = {
    data: data,
    xField: 'stage',
    yField: 'number',
    dynamicHeight: true,
    legend: false,
  };
  return <Funnel {...config} />;
};

export default ChartsCampaignsFunel