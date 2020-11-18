import React, { useState } from 'react'
import { Layout, Button } from 'antd'
// import PropTypes from 'prop-types'

import FormQuizzes from '../components/quizzes/FormQuizzes'
import Table from '../components/Table.component'

const { Header, Sider, Content } = Layout


const QuizzesPage = () => {
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
  const [visible, setVisible] = useState(false);
  const initialData = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    }, {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    }, {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    }, {
      key: '4',
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park',
    },
  ];

  const [data, setData] = useState(initialData);

  const onCreate = (values) => {
    setData(data.concat({
      name: values.name,
      age: values.age,
      address: values.address
    }));
    setVisible(false);
  };


  return (
    <Layout>
      <Sider>Либо можно сделать статистику здесь</Sider>
      <Layout>
        <Header>Статистика</Header>
        <Content>
          <h3>Таблица с опросами</h3>
          <Table columns={columns} data={data} />
          <div>
            <Button
              type="default"
              onClick={() => {
                setVisible(true);
              }}
            >
              Add Quiz
                        </Button>
            <FormQuizzes
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
  )
}

QuizzesPage.propTypes = {}

export default QuizzesPage