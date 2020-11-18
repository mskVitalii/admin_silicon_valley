import React, { useState } from 'react'

// import PropTypes from 'prop-types'
import { Layout, Button, Divider, Collapse } from 'antd'
import FormCampaign from '../components/campaigns/FormCampaign'
import ChartsCampaigns from '../components/campaigns/ChartsCampaigns'
import ChartsCampaignsFunel from '../components/campaigns/ChartsCampaignsFunel'
import Table from '../components/Table.component'
import { DownloadOutlined, SearchOutlined, PlusSquareOutlined, DeleteOutlined } from '@ant-design/icons';

import "./styles/Campaigns.css";

import ChartStatistic from "../components/campaigns/ChartStatistic";

const { Content } = Layout;
const { Panel } = Collapse;

const CampaingsPage = () => {

  const columns = [
    {
      title: "ID",
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
    }, {
      title: "Title",
      dataIndex: "employees",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    }, {
      title: "Address",
      dataIndex: "address",
      filters: [
        {
          text: "London",
          value: "London",
        }, {
          text: "New York",
          value: "New York",
        },
      ],
      filterMultiple: false,
      onFilter: (value, record) => record.address.indexOf(value) === 0,
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ["descend", "ascend"],
    }, {
      title: "Amount Raised",
      dataIndex: "employees",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    }, {
      title: "Recipient Name",
      dataIndex: "employees",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    }, {
      title: "Full Name",
      dataIndex: "employees",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    }, {
      title: "Recipient Age",
      dataIndex: "employees",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    }, {
      title: "Recipient Gender",
      dataIndex: "employees",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    }, {
      title: "Occasion",
      dataIndex: "employees",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    }, {
      title: "# of Participants",
      dataIndex: "employees",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    }, {
      title: "Started Day",
      dataIndex: "employees",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    }, {
      title: "End Day",
      dataIndex: "employees",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    }, {
      title: "Duration",
      dataIndex: "employees",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    }, {
      title: "# of Question Answered",
      dataIndex: "employees",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    }, {
      title: "# Of pictures Uploaded",
      dataIndex: "employees",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    }, {
      title: "# Of wishes Uploaded",
      dataIndex: "employees",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    }, {
      title: "View Details",
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
    }, {
      key: "2",
      name: "Company name 2",
      employees: Math.round(Math.random() * 10000),
      address: "London No. 1 Lake Park",
      description: "Details for 'Company name 2'",
    }, {
      key: "3",
      name: "Company name 3",
      employees: Math.round(Math.random() * 10000),
      address: "Sidney No. 1 Lake Park",
      description: "Details for 'Company name 3'",
    }, {
      key: "4",
      name: "Company name 4",
      employees: Math.round(Math.random() * 10000),
      address: "London No. 2 Lake Park",
      description: "Details for 'Company name 4'",
    }, {
      key: "5",
      name: "Company name 4",
      employees: Math.round(Math.random() * 10000),
      address: "London No. 2 Lake Park",
      description: "Details for 'Company name 4'",
    }, {
      key: "6",
      name: "Company name 4",
      employees: Math.round(Math.random() * 10000),
      address: "London No. 2 Lake Park",
      description: "Details for 'Company name 4'",
    }, {
      key: "7",
      name: "Company name 4",
      employees: Math.round(Math.random() * 10000),
      address: "London No. 2 Lake Park",
      description: "Details for 'Company name 4'",
    }, {
      key: "8",
      name: "Company name 4",
      employees: Math.round(Math.random() * 10000),
      address: "London No. 2 Lake Park",
      description: "Details for 'Company name 4'",
    }, {
      key: "9",
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
      <Collapse style={{ backgroundColor: '#fffffe', paddingBottom: '2rem' }} bordered={false} defaultActiveKey={['0']}>
        <Panel header="Statistic" key="1">
          <div className="layout-chart">
            <h2>Statistic</h2>
            <ChartStatistic />
          </div>
        </Panel>
      </Collapse>


      <div>
        <h2 style={{ marginLeft: '2rem' }}>Campaigns</h2>
        <div>
          <Button
            style={{ marginLeft: '1rem' }}
            type="primary" ghost
            icon={<PlusSquareOutlined />}
            onClick={() => { setVisible(true); }}>
            Add campaigns
          </Button>
          <Button
            style={{ margin: '1rem 1rem' }}
            icon={<DeleteOutlined />}
            danger={true} disabled={true}
            onClick={() => { setVisible(true); }}>
            Delete highlighted
          </Button>
          <Button default={true} disabled={true}
            icon={<DownloadOutlined />}
          >
            Download highlighted
          </Button>
          <FormCampaign
            visible={visible}
            onCancel={() => {
              setVisible(false);
            }} />
        </div>
        <Table columns={columns} data={data} />
      </div>
    </Layout>
  );
};

CampaingsPage.propTypes = {};

export default CampaingsPage;
