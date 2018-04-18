import React from "react";
import { Table } from 'antd';

function LeadsTable(props) {
  return (
      <Table rowKey= "id" dataSource={props.dataSource} columns={props.columns} />
  );
}

export default LeadsTable;
