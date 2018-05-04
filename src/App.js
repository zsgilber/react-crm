import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import update from "immutability-helper";
import ModalFormButton from "./components/ModalFormButton";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import LeadsTable from "./components/LeadsTable";
import { Row, Col } from "antd";
import { Layout, Menu, Breadcrumb, Icon } from "antd";
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const columns = [
  {
    title: "Lead ID",
    dataIndex: "id",
    key: "id"
  },
  {
    title: "First Name",
    dataIndex: "firstname",
    key: "firstname"
  },
  {
    title: "Last Name",
    dataIndex: "lastname",
    key: "lastname"
  }
];

class App extends Component {
  state = {
    leads: []
  };

  handleChildFunc(newLead) {
    newLead.then(respData => {
      const newLeads = update(this.state.leads, { $push: respData });
      console.log(newLeads);
      const newState = Object.assign({}, this.state, {
        leads: newLeads
      });
      this.setState(newState);
    });
  }

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
        console.log(newState);
        this.setState(newState);
      })
      .catch(error => console.log(error));
  }

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
          <Route path="/leads" render={()=><LeadsTable
            dataSource={this.state.leads}
            columns={columns}
          />}/>
          {/* <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Leads</Breadcrumb.Item>
          </Breadcrumb> */}
          {/* <Layout style={{ padding: "24px 0", background: "#fff" }}>
            <Sider width={200} style={{ background: "#fff" }}>
              <Menu mode="inline" style={{ height: "100%" }}>
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <Icon type="filter" />Filter
                    </span>
                  }
                >
                  <Menu.Item key="1">option1</Menu.Item>
                  <Menu.Item key="2">option2</Menu.Item>
                  <Menu.Item key="3">option3</Menu.Item>
                  <Menu.Item key="4">option4</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: "0 24px", minHeight: 525 }}>
              <div style={{ background: "#fff", padding: 24, minHeight: 380 }}>
                <Row type="flex" justify="end" style={{ marginBottom: 10 }}>
                  <ModalFormButton
                    buttonText="Create New Lead"
                    title="Title"
                    myFunc={this.handleChildFunc.bind(this)}
                  />
                </Row>

                <Row>
                  <Col>
                    <LeadsTable
                      dataSource={this.state.leads}
                      columns={columns}
                    />
                  </Col>
                </Row>
              </div>
            </Content>
          </Layout> */}
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
