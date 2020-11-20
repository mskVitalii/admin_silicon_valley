import React, { useContext, useState } from "react";
import { Table, Input, Button, } from "antd";
import {
  DownloadOutlined,
  PlusSquareOutlined,
  ExportOutlined 
} from "@ant-design/icons";
import Context from "../pages/context";

import FormCampaign from "../components/campaigns/FormCampaign";

import "./Table.component.scss";

const { Search } = Input;

function TableComponent({ columns, data, idTbl }) {
  const { deleteRow } = useContext(Context);
  for (let i = 0; i < data.length; i++) {
    data.forEach((item) => {
      item.action = (
        <Button
        className="deleteButton"
        type="dashed" danger
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
  return (
    <div>
      {/* <div className="table-info">
        <p>
          Количество строк: <span className="num-rows">{data.length}</span>
        </p>
      </div> */}
      <div className="table-actions">
        <Button
          type="primary"
          ghost
          icon={<PlusSquareOutlined />}
          onClick={() => {
            setVisible(true);
          }}
        >
          Add campaigns
        </Button>
        <Button default={true} disabled={true} icon={<DownloadOutlined /> }className="downloadButton">
          download
        </Button>
        <Button default={true} disabled={true} icon={<ExportOutlined />} className="exportButton">
          export
        </Button>
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
