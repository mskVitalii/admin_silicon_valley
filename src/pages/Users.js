import React, { useState } from "react";
import { Layout, Button, Tabs } from "antd";

import FormUsers from "../components/users/FormUser";
import Table from "../components/Table.component";
import Context from "./context";

// import PropTypes from 'prop-types'

const { Header, Sider, Content } = Layout;
const { TabPane } = Tabs;

const UsersPage = () => {
  const columns = [
    {
      title: "user ID",
      dataIndex: "id",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "Full Name",
      dataIndex: "name",
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Date of Birth",
      dataIndex: "birthDate",
      sorter: (a, b) => a.birthDate - b.birthDate,
    },
    {
      title: "Gender",
      dataIndex: "gender",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.gender - b.gender,
    },
    {
      title: "Phone",
      dataIndex: "phone",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Email",
      dataIndex: "email",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Delivery Address",
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
      title: "Date of Registration",
      dataIndex: "regDate",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Days since last Login",
      dataIndex: "lastLoginDate",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "UTMs",
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
  for (const tableCol of columns) {
    if (tableCol.dataIndex == "id") tableCol.width = 55;
    else tableCol.width = 150;
  }

  const [visible, setVisible] = useState(false);
  const initialData = [];
  // Генерируем данные для таблицы
  for (let i = 1; i <= 30; i++) {
    initialData.push({
      id: `${i}`,
      name: ["John Brown", "Jim Green", "Joe Black", "Jim Red"][
        Math.floor(Math.random() * 4)
      ],
      birthDate: `${new Date(Math.random() * 100000)}`,
      age: 20 + Math.floor(Math.random() * 30),
      address: [
        "London No. 2 Lake Park",
        "Sidney No. 1 Lake Park",
        "London No. 1 Lake Park",
        "New York No. 1 Lake Park",
      ][Math.floor(Math.random() * 4)],
    });
  }
  const [data, setData] = useState(initialData);
  function deleteRow(key) {
    setData(data.filter((item) => item.key != key));
  }

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
    <Context.Provider value={{ deleteRow }}>
      <Tabs defaultActiveKey="1" size={"large"} style={{ marginBottom: 32 }}>
        <TabPane tab="Customers" key="1">
          <Table columns={columns} data={data} />
          <Button
            type="default"
            onClick={() => {
              setVisible(true);
            }}
          >
            Add User
          </Button>
          <FormUsers
            visible={visible}
            onCreate={onCreate}
            onCancel={() => {
              setVisible(false);
            }}
          />
        </TabPane>
        <TabPane tab="Admins" key="2">
          <h3>Users with administrative rights</h3>
          <Table columns={columns} data={data} />
          <Button
            type="default"
            onClick={() => {
              setVisible(true);
            }}
          >
            Add User
          </Button>
          <FormUsers
            visible={visible}
            onCreate={onCreate}
            onCancel={() => {
              setVisible(false);
            }}
          />
        </TabPane>
      </Tabs>
    </Context.Provider>
  );
};

UsersPage.propTypes = {};

export default UsersPage;
