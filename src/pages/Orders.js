import React, { useState } from "react";
import TableNCahootsCampaigns from "../components/campaigns/TableCampaigns";
import FormOrders from "../components/orders/FormOrdersOrder";
import { Layout, Button, Tabs } from "antd";
import FormOrdersOrder from "../components/orders/FormOrdersOrder";
// import PropTypes from 'prop-types'

import StatisticChart from "../components/campaigns/StatisticChart";
import "./Orders.css";

const { Header, Sider, Content } = Layout;
const { TabPane } = Tabs;

const OrdersPage = () => {
  const [visible, setVisible] = useState(false);
  const initialData = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
    },
    {
      key: "4",
      name: "Jim Red",
      age: 32,
      address: "London No. 2 Lake Park",
    },
  ];

  const [data, setData] = useState(initialData);
  const onCreate = (values) => {
    setData(
      data.concat({
        name: values.name,
        age: values.age,
        address: values.address,
      })
    );
    setVisible(false);
  };

  return (
    // <Layout className="layout-main">
    //   <Layout className="layout-chart">
    //     <Content>
    //       <h2>Статистика</h2>
    //       <StatisticChart />
    //     </Content>
    //   </Layout>
    //   <Layout className="layout-table">
    //     <Header>Таблица с NCahoots Campaigns</Header>
    //     <Content>
    //       <TableNCahootsCampaigns />
    //     </Content>
    //   </Layout>
    // </Layout>

    <Tabs defaultActiveKey="1" size={"large"} style={{ marginBottom: 32 }}>
      <TabPane tab="Finances" key="1">
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
              <h3>Таблица с заказами</h3>
              <TableNCahootsCampaigns />
              <div>
                <Button
                  type="default"
                  onClick={() => {
                    setVisible(true);
                  }}
                >
                  Add Order
                </Button>
                <FormOrders
                  visible={visible}
                  onCreate={onCreate}
                  onCancel={() => {
                    setVisible(false);
                  }}
                />
              </div>
            </Content>
          </Layout>
        </Layout>
      </TabPane>
      <TabPane tab="Shopping Lists" key="2">
        <Layout className="layout-main">
          <Layout className="layout-chart">
            <Content>
              <h2>Статистика</h2>
              <StatisticChart />
            </Content>
          </Layout>
        </Layout>
        <Layout className="layout-table">
          <Header>Таблица с NCahoots Campaigns</Header>
          <Content>
            <h3>Таблица с заказами</h3>

            <TableNCahootsCampaigns />
            <Button
              type="default"
              onClick={() => {
                setVisible(true);
              }}
            >
              Add User
            </Button>
            <FormOrdersOrder
              visible={visible}
              onCreate={onCreate}
              onCancel={() => {
                setVisible(false);
              }}
            />
          </Content>
        </Layout>
      </TabPane>
      <TabPane tab="Wishes" key="3">
        <Layout className="layout-main">
          <Layout className="layout-chart">
            <Content>
              <h2>Статистика</h2>
              <StatisticChart />
            </Content>
          </Layout>
        </Layout>
        <Layout className="layout-table">
          <Header>Таблица с NCahoots Campaigns</Header>
          <Content>
            <h3>Таблица с заказами</h3>

            <TableNCahootsCampaigns />
            <Button
              type="default"
              onClick={() => {
                setVisible(true);
              }}
            >
              Add User
            </Button>
            <FormOrdersOrder
              visible={visible}
              onCreate={onCreate}
              onCancel={() => {
                setVisible(false);
              }}
            />
          </Content>
        </Layout>
      </TabPane>
      <TabPane tab="Pictures" key="4">
        <Layout className="layout-main">
          <Layout className="layout-chart">
            <Content>
              <h2>Статистика</h2>
              <StatisticChart />
            </Content>
          </Layout>
        </Layout>
        <Layout className="layout-table">
          <Header>Таблица с NCahoots Campaigns</Header>
          <Content>
            <h3>Таблица с заказами</h3>

            <TableNCahootsCampaigns />
            <Button
              type="default"
              onClick={() => {
                setVisible(true);
              }}
            >
              Add User
            </Button>
            <FormOrdersOrder
              visible={visible}
              onCreate={onCreate}
              onCancel={() => {
                setVisible(false);
              }}
            />
          </Content>
        </Layout>
      </TabPane>
    </Tabs>
  );
};

OrdersPage.propTypes = {};

export default OrdersPage;
