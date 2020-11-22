import React, { useState } from "react";
import { Layout, Button, Collapse } from "antd";

import ChartStatistic from "../../campaigns/ChartStatistic";
import FormOrders from "../../orders/FormOrdersOrder";
import Table from "../../Table.component";
import Context from "../../../pages/context";

const { Panel } = Collapse;

function PicturesTab() {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      fixed: "left",
      sorter: (a, b) => a.id.length - b.id.length,
      sortDirections: ["descend", "ascend"],
    },
    {
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
      onFilter: (value, record) => record.id.indexOf(value) === 0,
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
      width: 150,
      filterMultiple: false,
      onFilter: (value, record) => record.address.indexOf(value) === 0,
      sorter: (a, b) => a.address.length - b.address.length,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Amount Raised",
      dataIndex: "title",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.title - b.title,
    },
    {
      title: "Recipient name",
      dataIndex: "title",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.title - b.title,
    },
    {
      title: "Full name",
      dataIndex: "title",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Recipient Age",
      dataIndex: "age",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Recipient Gender",
      dataIndex: "title",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Occasion",
      dataIndex: "title",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "# of Participants",
      dataIndex: "title",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Started Day",
      dataIndex: "title",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "End Day",
      dataIndex: "title",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Duration",
      dataIndex: "title",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "# of Question Answered",
      dataIndex: "title",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "# Of pictures Uploaded",
      dataIndex: "title",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "# Of wishes Uploaded",
      dataIndex: "title",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "View Details",
      dataIndex: "title",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Action",
      dataIndex: "action",
      fixed: "right",
    },
  ];
  for (const tableCol of columns) {
    if (tableCol.dataIndex == "id") tableCol.width = 55;
    else tableCol.width = 150;
  }

  let initData = [];
  // Генерируем данные для таблицы
  for (let i = 1; i <= 30; i++) {
    initData.push({
      key: `${i}`,
      id: `${i}`,
      title: ["John Brown", "Jim Green", "Joe Black", "Jim Red"][
        Math.floor(Math.random() * 4)
      ],
      age: 20 + Math.floor(Math.random() * 30),
      address: [
        "London No. 2 Lake Park",
        "Sidney No. 1 Lake Park",
        "London No. 1 Lake Park",
        "New York No. 1 Lake Park",
      ][Math.floor(Math.random() * 4)],
      description: `Details for 'Company id ${i}'`,
    });
  }

  const { Header, Sider, Content } = Layout;
  const [visible, setVisible] = useState(false);

  // const [data, setData] = useState(initialData);
  let [data, setData] = React.useState(initData);
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
      <Layout className="layout-main">
        <Collapse
          style={{ backgroundColor: "#fffffe", paddingBottom: "2rem" }}
          bordered={false}
          defaultActiveKey={["0"]}
        >
          <Panel header="Statistic" key="1">
            <div className="layout-chart">
              <h2>Statistic</h2>
              <ChartStatistic />
            </div>
          </Panel>
        </Collapse>
        
        <div>
          <h2>Pictures table</h2>
          <Table columns={columns} data={data} />
        </div>
      </Layout>
    </Context.Provider>
  );
}

PicturesTab.propTypes = {};

export default PicturesTab;
