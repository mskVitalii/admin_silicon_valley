import React from "react";
import PropTypes from "prop-types";
import { Table } from "antd";
import { Input } from 'antd';

const { Search } = Input;


function TableComponent({ columns, data }) {

  const onSearch = value => console.log(value.target.defaultValue);

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  return (
    <div>
      <Search
        placeholder="input search text"
        allowClear
        onChange={onSearch}
        style={{ width: 200, margin: '0 10px' }}
      />

      <Table
        style={{ overflowX: 'scroll' }}
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
