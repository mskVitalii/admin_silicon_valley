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
    <Layout>
      <Sider width="30vw" height="100%">
        {/* <Card
          title="Статистика"
          style={{ width: "100%", height: "100%" }}
          className="chart-card"
        > */}
        <h2>Статистика</h2>
          <div className="stat-chart-cont">
            <StatisticChart />
          </div>
        {/* </Card> */}
      </Sider>
      <Layout>
        <Header>Статистика</Header>
        <Content>
          таблица с NCahoots Campaigns
          <TableNCahootsCampaigns />
        </Content>
      </Layout>
    </Layout>
  );
};

CampaingsPage.propTypes = {};

export default CampaingsPage;
