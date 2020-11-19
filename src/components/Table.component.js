import React from "react";
import { Table } from "antd";
import { Input } from 'antd';
import { useState } from "react";

import './Table.component.css'

const { Search } = Input;

function TableComponent({ columns, data }) {

  const [tableData, setTableData] = useState(data);
  const onSearch = value => {
    // Поиск по title
    setTableData(data.filter(dataObj => ("" + dataObj.title)
      .toLocaleLowerCase().match(
        `^.*${value.target.defaultValue.toLocaleLowerCase()}.*$`) !== null
    ))
  }

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  //TABLE INFO
  let [numLines, setNumLines] = React.useState(data.length);

  return (
    <div>
      <Search
        placeholder="input search text"
        allowClear
        onKeyUp={onSearch}
        style={{ width: 200, margin: '0 10px' }}
      />

      <br/>
      <div className="table-info">
        <p>
          Количество строк: <span className="num-rows">{numLines}</span>
        </p>
      </div>

      <Table
        scroll={{ x: "fit-content" }}
        columns={columns}
        dataSource={tableData}
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
