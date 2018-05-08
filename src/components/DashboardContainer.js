import React, { Component } from "react";
import { OrdinalFrame } from "semiotic";
import { Layout, Menu, Breadcrumb, Icon, Row, Col } from "antd";

const { Header, Content, Footer, Sider } = Layout;

const barChartData = [
  { category: "Leads", sum: 10}
];

class DashboardContainer extends Component {
  render() {
    return (
      <Layout>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </Breadcrumb>
        <Content>
          <Row>
            <Col span={6}>
              {" "}
              <OrdinalFrame
                size={[100, 300]}
                data={barChartData}
                oAccessor={"category"}
                rAccessor={"sum"}
                style={{ fill: "#00a2ce", stroke: "white" }}
                type={"bar"}
                oLabel={true}
              />
            </Col>
          </Row>
        </Content>
      </Layout>
    );
  }
}

export default DashboardContainer;
