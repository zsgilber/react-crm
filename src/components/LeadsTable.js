import React from "react";
import { Table, Button } from 'antd';
import axios from "axios";

class LeadsTable extends React.Component {
  state = {
    selectedRowKeys: [], // Check here to configure the default column
    loading: false,
  };
  start = () => {
    this.setState({ loading: true });
      var leadsToDelete = {
        "idsToDelete": this.state.selectedRowKeys
      };
      console.log(leadsToDelete);
      axios.post('api/leads/delete', leadsToDelete)
      .then(response => {
    console.log(response);
    this.setState({
      selectedRowKeys: [],
      loading: false,
    });

  })
  .catch(error => {
    console.log(error);
    window.alert("Failed to delete!"); //improve this alert using Ant design component
    this.setState({
      selectedRowKeys: [],
      loading: false,
    });
  });
    };
  onSelectChange = (selectedRowKeys) => {
    console.log('selectedRowKeys changed: ', selectedRowKeys);
    this.setState({ selectedRowKeys });
  }
  render() {
    const { loading, selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
    };
    const hasSelected = selectedRowKeys.length > 0;
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <Button
            type="primary"
            onClick={this.start}
            disabled={!hasSelected}
            loading={loading}
          >
            Delete
          </Button>
          <span style={{ marginLeft: 8 }}>
            {hasSelected ? `Selected ${selectedRowKeys.length} items` : ''}
          </span>
        </div>
        <Table rowKey="id" rowSelection={rowSelection} columns={this.props.columns} dataSource={this.props.dataSource} />
      </div>
    );
  }
}

      //<Table rowKey= "id" dataSource={this.props.dataSource} columns={this.props.columns} />


export default LeadsTable;
