import React from "react";
import PropTypes from "prop-types";
import { Table } from "antd";

function NCahootsCampaignsTable() {
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

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  return (
    <div>
      <h3>Таблица</h3>
      <Table
        columns={columns}
        dataSource={data}
        onChange={onChange}
        expandable={{
          expandedRowRender: (record) => (
            <p style={{ margin: 0 }}>{record.description}</p>
          ),
          rowExpandable: (record) => record.name !== "Not Expandable",
        }}
      />
    </div>
  );
}

NCahootsCampaignsTable.propTypes = {};

export default NCahootsCampaignsTable;
