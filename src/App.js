import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import update from "immutability-helper";
import ModalFormButton from "./components/ModalFormButton";
import LeadsContainer from "./components/LeadsContainer";
import LeadsTable from "./components/LeadsTable";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { Row, Col } from "antd";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;


class App extends Component {

  render() {
    return (
    <Router>
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["1"]}
            style={{ lineHeight: "64px" }}
          >
            <Menu.Item key="1">
              <Link to="/leads">Leads</Link>
            </Menu.Item>
            <Menu.Item key="2">Contacts</Menu.Item>
            <Menu.Item key="3">Opportunities</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Route path="/leads" component={LeadsContainer} />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          <a href="http://github.com/zsgilber">
            {" "}
            <Icon type="github" style={{ fontSize: 16 }} />
          </a>
        </Footer>
      </Layout>
    </Router>
    );
  }
}

export default App;
