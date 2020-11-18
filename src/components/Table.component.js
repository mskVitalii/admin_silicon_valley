import React from "react";
import PropTypes from "prop-types";
import { Table } from "antd";

function TableComponent({ columns, data }) {

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  return (
    <div>
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
