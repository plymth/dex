import React, { Component } from 'react';
import { Layout, Col, Row } from 'antd';
import './App.css';
import Swap from './Swap'

const { Header, Content } = Layout;

export class App extends Component {
  render() {
    return (
      <Layout>
        <Header className="App__header"></Header>
        <Content className="App__content">
          <Row justify="center">
            <Col>
              <Swap />
            </Col>
          </Row>
        </Content>
      </Layout>
    )
  }
}

export default App
