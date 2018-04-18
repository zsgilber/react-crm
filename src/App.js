import React, { Component } from 'react';
import ModalFormButton from "./components/ModalFormButton";
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import LeadsTable from "./components/LeadsTable";
import { Row, Col } from 'antd';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const columns = [{  title: 'Lead ID',
  dataIndex: 'id',
  key: 'id',
}, {
  title: 'First Name',
  dataIndex: 'firstname',
  key: 'firstname',
}, {
  title: 'Last Name',
  dataIndex: 'lastname',
  key: 'lastname',
}];

class App extends Component {

  state = {
    leads: []
  };

  componentDidMount() {
   axios
     .get("/api/leads")
     .then(response => {

       const newLeads = response.data;

       // create a new "State" object without mutating
       // the original State object.
       const newState = Object.assign({}, this.state, {
         leads: newLeads
       });

       // store the new state object in the component's state
       this.setState(newState);
     })
     .catch(error => console.log(error));
  }

  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">Leads</Menu.Item>
            <Menu.Item key="2">Contacts</Menu.Item>
            <Menu.Item key="3">Opportunities</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Leads</Breadcrumb.Item>
          </Breadcrumb>
          <Layout style={{ padding: '24px 0', background: '#fff' }}>
            <Sider width={200} style={{ background: '#fff' }}>
              <Menu
                mode="inline"
                style={{ height: '100%' }}
              >
                <SubMenu key="sub1" title={<span><Icon type="filter" />Filter</span>}>
                  <Menu.Item key="1">option1</Menu.Item>
                  <Menu.Item key="2">option2</Menu.Item>
                  <Menu.Item key="3">option3</Menu.Item>
                  <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: '0 24px', minHeight:525}}>
            <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
                    <Row type="flex" justify="end">
                    <ModalFormButton buttonText="Add New Lead" title="Title" />
                    </Row>
                    <Row>
                    <Col span={24}><LeadsTable dataSource={this.state.leads} columns={columns} /></Col>
                    </Row></div>
            </Content>
          </Layout>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
 <a href="http://github.com/zsgilber"> <Icon type="github" style={{ fontSize: 16}} /></a>
        </Footer>
      </Layout>

    );
  }
}

export default App;
