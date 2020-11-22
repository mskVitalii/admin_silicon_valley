import React, { useContext, useState } from "react";
import { Table, Input, Button } from "antd";
import {
  DownloadOutlined,
  PlusSquareOutlined,
  ExportOutlined,
} from "@ant-design/icons";
import Context from "../pages/context";

import FormCampaign from "../components/campaigns/FormCampaign";

import "./Table.component.scss";

const { Search } = Input;

// idTbl -приходит только из Quizzes
function TableComponent({ columns, data, idTbl }) {
  const { deleteRow } = useContext(Context);
  for (let i = 0; i < data.length; i++) {
    data.forEach((item) => {
      item.action = (
        <Button
          className="deleteButton"
          type="dashed"
          danger
          onClick={() => {
            deleteRow.call(null, item.key, idTbl ? idTbl : null);
          }}
        >
          delete
        </Button>
      );
    });
  }

  const [tableData, setTableData] = useState(data);
  const onSearch = (value) => {
    // Поиск по title
    setTableData(
      data.filter(
        (dataObj) =>
          ("" + dataObj.title)
            .toLocaleLowerCase()
            .match(`^.*${value.target.defaultValue.toLocaleLowerCase()}.*$`) !==
          null
      )
    );
  };

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }
  let [visible, setVisible] = React.useState(false);

  let [selectedRowKeys, setSelectedRows] = React.useState({
    selectedRowKeys: [],
  });
  let onSelectChange = (selectedRowKeys) => {
    setSelectedRows({ selectedRowKeys });
  };
  const rowSelection = {
    selectedRowKeys: selectedRowKeys.selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      {
        key: "odd",
        text: "Select odd rows",
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          return setSelectedRows({ selectedRowKeys: newSelectedRowKeys });
        },
      },
      {
        key: "even",
        text: "Select even rows",
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((key, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          return setSelectedRows({ selectedRowKeys: newSelectedRowKeys });
        },
      },
      {
        key: "download",
        text: "Download selected rows",
        onSelect: (changableRowKeys) => {
          setVisible(true);
        //   <Button
        //   type="primary"
        //   ghost
        //   icon={<PlusSquareOutlined />}
        //   onClick={() => {
        //     setVisible(true);
        //   }}
        // >
        //   <span>Add campaigns</span>
        // </Button>
        },
      },
    ],
  };

  // function focusButton(e) {
  //   let btnsAction = document.querySelector(".btns-actions");
  //   let numBtns = btnsAction.children.length;
  //   let percTarget = 97 / numBtns + 15;
  //   let percOther = 97 / numBtns - 15 / (numBtns - 1);
  //   let idTarget = e.target.id.match(/\d/)[0];

  //   console.log('object :>> ', percTarget, percOther);
  //   let str = '';
  //   for(let i = 0; i < numBtns; i++) {
  //     let _w = idTarget == i ? percTarget : percOther;
  //     str += `${_w}% `
  //   }
  //   console.log('object :>> ', str);

  //   btnsAction.style.gridTemplateColumns = `repeat(${numBtns}, ${str})`;
  // }

  return (
    <div>
      {/* <div className="table-info">
        <p>
          Количество строк: <span className="num-rows">{data.length}</span>
        </p>
      </div> */}
      <div className="table-actions">
        <div className="btns-actions">
          <Button
            type="primary"
            ghost
            icon={<PlusSquareOutlined />}
            onClick={() => {
              setVisible(true);
            }}
          >
            <span>Add campaigns</span>
          </Button>
          <Button
            default={true}
            disabled={true}
            icon={<DownloadOutlined />}
            className="downloadButton"
          >
            <span>Download</span>
          </Button>
          <Button
            default={true}
            disabled={true}
            icon={<ExportOutlined />}
            className="exportButton"
          >
            <span>Export</span>
          </Button>
        </div>
        <FormCampaign
          visible={visible}
          onCancel={() => {
            setVisible(false);
          }}
        />
        <Search
          className="search"
          enterButton
          size="large"
          placeholder="input search text"
          allowClear
          onKeyUp={onSearch}
        />
      </div>

      <Table
        scroll={{ x: "fit-content" }}
        rowSelection={rowSelection}
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

TableComponent.propTypes = {};

export default TableComponent;
