import React, { useState } from "react";
import { Layout, Button, Collapse } from "antd";
import { Tabs } from "antd";

// import PropTypes from 'prop-types'
import ChartStatistic from "../components/campaigns/ChartStatistic";
import FormQuizzes from "../components/quizzes/FormQuizzes";
import Table from "../components/Table.component";
import Context from "./context";

const { Panel } = Collapse;
const { TabPane } = Tabs;

const QuizzesPage = () => {
  const colsShowQuiz = [
    {
      title: "NCahoots ID",
      dataIndex: "id",
      sorter: (a, b) => a.id - b.id,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Response Author",
      dataIndex: "author",
      defaultSortOrder: "descend",
      sorter: (a, b) => a.author - b.author,
    },
    {
      title: "Response Date",
      dataIndex: "date",
      sorter: (a, b) => a.date - b.date,
      sortDirections: ["descend", "ascend"],
    },
  ];
  const colsEditQuestions = [
    {
      title: "ID",
      dataIndex: "id",
      defaultSortOrder: "ascend",
      sorter: (a, b) => a.id - b.id,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Category ID",
      dataIndex: "catID",
      sorter: (a, b) => a.catID - b.catID,
    },
    {
      title: "Child Category ID",
      dataIndex: "childCatID",
      sorter: (a, b) => a.childCatID - b.childCatID,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Primary Text",
      dataIndex: "primaryText",
      sorter: (a, b) => a.primaryText - b.primaryText,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Trigger",
      dataIndex: "trigger",
      sorter: (a, b) => a.trigger - b.trigger,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Question Type",
      dataIndex: "type",
      sorter: (a, b) => a.type - b.type,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Secondary Text",
      dataIndex: "secondaryText",
      sorter: (a, b) => a.secondaryText - b.secondaryText,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Answer Options",
      dataIndex: "options",
      sorter: (a, b) => a.options - b.options,
      sortDirections: ["descend", "ascend"],
    },
    {
      title: "Variable",
      dataIndex: "variable",
      sorter: (a, b) => a.variable - b.variable,
      sortDirections: ["descend", "ascend"],
    },
  ];

  const initialDataShow = [];
  const initialDataEdit = [];

  // Генерируем данные для таблиц
  for (let i = 0; i <= 5; i++) {
    initialDataShow.push({
      key: `${i}`,
      id: `${i}`,
      author: ["John Brown", "Jim Green", "Joe Black", "Jim Red"][
        Math.floor(Math.random() * 4)
      ],
      date: `${new Date(Math.random() * 100000)}`,
    });
  }
  for (let i = 0; i <= 5; i++) {
    initialDataEdit.push({
      key: `${i}`,
      id: `${i}`,
      catID: `${Math.floor(Math.random() * 5)}`,
      childCatID: `${Math.floor(Math.random() * 5)}`,
      primaryText: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
      secondaryText: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
      trigger: "trigger",
      type: 1,
      options: "1. option1\n2. option2",
      variable: "variable",
    });
  }

  function deleteRow(key, data) {
    if (data == 1) {
      setDataShow(dataShow.filter((item) => item.key != key));
    } else if (data == 0) {
      setDataEdit(dataEdit.filter((item) => item.key != key));
    }
  }

  const [dataShow, setDataShow] = useState(initialDataShow);
  const [dataEdit, setDataEdit] = useState(initialDataEdit);
  const [visible, setVisible] = useState(false);

  const onCreate = (values) => {
    setDataEdit((prev) =>
      prev.concat({
        name: values.name,
        age: values.age,
        address: values.address,
      })
    );
    setVisible(false);
  };

  return (
    <Context.Provider value={{ deleteRow }}>
      <Layout>
        {/* <Collapse style={{ backgroundColor: '#fffffe', paddingBottom: '2rem' }} bordered={false} defaultActiveKey={['0']}>
        <Panel header="Statistic" key="1">
          <div className="layout-chart">
            <h2>Statistic</h2>
            <ChartStatistic />
          </div>
        </Panel>
      </Collapse> */}

        <div div style={{ backgroundColor: "#fffffe" }}>
          <Tabs
            defaultActiveKey="1"
            size={"large"}
            style={{ marginBottom: 32 }}
          >
            <TabPane tab="User's quizzes & interactions" key="1">
              <h2 style={{ marginLeft: "2rem" }}>User's quizzes</h2>
              <Table columns={colsShowQuiz} data={dataShow} idTbl={1} />
              <div>
                <FormQuizzes
                  visible={visible}
                  onCreate={onCreate}
                  onCancel={() => {
                    setVisible(false);
                  }}
                />
              </div>
            </TabPane>
            <TabPane tab="All quizzes from DB" key="2">
              <h2 style={{ marginLeft: "2rem" }}>All quizzes</h2>
              <Table columns={colsEditQuestions} data={dataEdit} idTbl={0} />
              <div>
                <FormQuizzes
                  visible={visible}
                  onCreate={onCreate}
                  onCancel={() => {
                    setVisible(false);
                  }}
                />
              </div>
            </TabPane>
          </Tabs>
        </div>
      </Layout>
    </Context.Provider>
  );
};

QuizzesPage.propTypes = {};

export default QuizzesPage;
