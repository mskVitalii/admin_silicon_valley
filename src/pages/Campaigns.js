import React, { useState } from 'react'

// import PropTypes from 'prop-types'
import { Layout, Button, Collapse, Popconfirm } from 'antd'
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
      dataIndex: "id",
      fixed: 'left',
      sorter: (a, b) => a.id.length - b.id.length,
      sortDirections: ["descend", "ascend"],
    }, {
      title: "Title",
      dataIndex: "title",
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
      // here is that finding the id started with `value`
      onFilter: (value, record) => record.id.indexOf(value) === 0,
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
      width: 150,
      filterMultiple: false,
      onFilter: (value, record) => record.address.indexOf(value) === 0,
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ["descend", "ascend"],
    }, {
      title: "Amount Raised",
      dataIndex: "title",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.title - b.title,
    }, {
      title: "Recipient name",
      dataIndex: "title",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.title - b.title,
    }, {
      title: "Full name",
      dataIndex: "title",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    }, {
      title: "Recipient Age",
      dataIndex: "age",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    }, {
      title: "Recipient Gender",
      dataIndex: "title",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    }, {
      title: "Occasion",
      dataIndex: "title",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    }, {
      title: "# of Participants",
      dataIndex: "title",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    }, {
      title: "Started Day",
      dataIndex: "title",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    }, {
      title: "End Day",
      dataIndex: "title",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    }, {
      title: "Duration",
      dataIndex: "title",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    }, {
      title: "# of Question Answered",
      dataIndex: "title",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    }, {
      title: "# Of pictures Uploaded",
      dataIndex: "title",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    }, {
      title: "# Of wishes Uploaded",
      dataIndex: "title",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    }, {
      title: "View Details",
      dataIndex: "title",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    }, {
      title: "Action",
      dataIndex: "action",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
      fixed: 'right',
      // return: (text, record) =>
      // this.state.dataSource.length >= 1 ? (
      //   <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
      //     <a>Delete</a>
      //   </Popconfirm>
      // ) : null
    }
  ];
  for (const tableCol of columns) {
    if (tableCol.dataIndex == 'id')
      tableCol.width = 75
    else tableCol.width = 150
  }

  const data = [];

  // Генерируем данные для таблицы
  for (let i = 1; i <= 30; i++) {
    data.push({
      key: `${i}`,
      id: `${i}`,
      title: ['John Brown', 'Jim Green', 'Joe Black', 'Jim Red'][Math.floor(Math.random() * 4)],
      age: 20 + Math.floor(Math.random() * 30),
      address: ['London No. 2 Lake Park', 'Sidney No. 1 Lake Park', 'London No. 1 Lake Park', 'New York No. 1 Lake Park'][Math.floor(Math.random() * 4)],
      description: `Details for 'Company id ${i}'`,
      action: (<button>delete</button>)
    })
  }


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
