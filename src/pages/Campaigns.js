import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import { Layout, Button } from 'antd'

import TableNCahootsCampaigns  from '../components/campaigns/TableCampaigns'
import FormCampaign            from '../components/campaigns/FormCampaign'
import ChartsCampaigns         from '../components/campaigns/ChartsCampaigns'
import ChartsCampaignsFunel    from '../components/campaigns/ChartsCampaignsFunel'

import "./Campaigns.css";

import StatisticChart from "../components/campaigns/StatisticChart";

const { Header, Sider, Content } = Layout;

const CampaingsPage = () => {
  let [height, setHeight] = React.useState(null)
  return (
    <Layout className="layout-main">
      <Layout className="layout-chart">
        <Content>
          <h2>Статистика</h2>
          <StatisticChart />
        </Content>
      </Layout>
      <Layout className="layout-table">
        <Header>Таблица с NCahoots Campaigns</Header>
        <Content>
          <TableNCahootsCampaigns />
        </Content>
      </Layout>
    </Layout>
  );
};

CampaingsPage.propTypes = {};

export default CampaingsPage;
