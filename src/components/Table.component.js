import React from "react";
import PropTypes from "prop-types";
import { Table } from "antd";
import { Input } from 'antd';
import { useState } from "react";

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

  return (
    <div>
      <Search
        placeholder="input search text"
        allowClear
        onKeyUp={onSearch}
        style={{ width: 200, margin: '0 10px' }}
      />

      <Table
        scroll={{ x: 'fit-content' }}
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
