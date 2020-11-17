import React, { useState } from 'react'
// import PropTypes from 'prop-types'
import { Layout, Button } from 'antd'
import FormCampaign            from '../components/campaigns/FormCampaign'
import ChartsCampaigns         from '../components/campaigns/ChartsCampaigns'
import ChartsCampaignsFunel    from '../components/campaigns/ChartsCampaignsFunel'
import Table                   from '../components/Table.component'

import "./Campaigns.css";

import StatisticChart from "../components/campaigns/StatisticChart";

const { Header, Sider, Content } = Layout;

const CampaingsPage = () => {

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      filters: [
        {
          text: "Joe",
          value: "Joe",
        },
        {
          text: "Jim",
          value: "Jim",
        },
        {
          text: "Submenu",
          value: "Submenu",
          children: [
            {
              text: "Green",
              value: "Green",
            },
            {
              text: "Black",
              value: "Black",
            },
          ],
        },
      ],
      // specify the condition of filtering result
      // here is that finding the name started with `value`
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Employees",
      dataIndex: "employees",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Address",
      dataIndex: "address",
      filters: [
        {
          text: "London",
          value: "London",
        },
        {
          text: "New York",
          value: "New York",
        },
      ],
      filterMultiple: false,
      onFilter: (value, record) => record.address.indexOf(value) === 0,
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ["descend", "ascend"],
    },    
    {
      title: "Employees",
      dataIndex: "employees",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Employees",
      dataIndex: "employees",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Employees",
      dataIndex: "employees",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Employees",
      dataIndex: "employees",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Employees",
      dataIndex: "employees",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Employees",
      dataIndex: "employees",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Employees",
      dataIndex: "employees",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Employees",
      dataIndex: "employees",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Employees",
      dataIndex: "employees",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Employees",
      dataIndex: "employees",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    }
  ];

  const data = [
    {
      key: "1",
      name: "Company name 1",
      employees: Math.round(Math.random() * 10000),
      address: "New York No. 1 Lake Park",
      description: "Details for 'Company name 1'",
    },
    {
      key: "2",
      name: "Company name 2",
      employees: Math.round(Math.random() * 10000),
      address: "London No. 1 Lake Park",
      description: "Details for 'Company name 2'",
    },
    {
      key: "3",
      name: "Company name 3",
      employees: Math.round(Math.random() * 10000),
      address: "Sidney No. 1 Lake Park",
      description: "Details for 'Company name 3'",
    },
    {
      key: "4",
      name: "Company name 4",
      employees: Math.round(Math.random() * 10000),
      address: "London No. 2 Lake Park",
      description: "Details for 'Company name 4'",
    },
  ];



  let [height, setHeight] = React.useState(null)
  let [visible, setVisible] = React.useState(false);
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
          <Table columns={columns} data={data}/>
          <div>
            <Button
              type="default"
              onClick={() => {
                setVisible(true);
              }}
            >
              Add Order
            </Button>
            <FormCampaign
              visible={visible}
              onCancel={() => {
                setVisible(false);
              }}
            />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

CampaingsPage.propTypes = {};

export default CampaingsPage;
