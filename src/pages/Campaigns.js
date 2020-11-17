import React from "react";
import { Layout, Card } from "antd";

import "./Campaigns.css";

import PropTypes from "prop-types";

import TableNCahootsCampaigns from "../components/campaigns/TableCampaigns";
import StatisticChart from "../components/campaigns/StatisticChart";

const { Header, Sider, Content } = Layout;

const CampaingsPage = () => {
  // let [height, setHeight] = React.useState(null)
  return (
    <Layout className="layout-main">
      {/* <Sider width="30vw" height="100%"> */}
      {/* <Card
          title="Статистика"
          style={{ width: "100%", height: "100%" }}
          className="chart-card"
        > */}
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
