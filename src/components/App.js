import React, { Component } from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { Layout, Col, Row } from 'antd';
import './App.css';
import Navbar from './Navbar';
import Swap from './Swap';
import Pool from './Pool';
import About from './About';
import Vote from './Vote';

const { Header, Content } = Layout;

export class App extends Component {
  render() {
    return (
      <Layout className="App__layout">
        <Header className="App__header">
          <Navbar />
        </Header>
        <Content className="App__content">
          <Row justify="center">
            <Col>
              <Routes>
                <Route path="/swap" element={<Swap />} />
                <Route path="/pool" element={<Pool />} />
                <Route path="/about" element={<About />} />
                <Route path="/vote" element={<Vote />} />
                <Route path="*" element={<Navigate to="/swap" replace />} />
              </Routes>
            </Col>
          </Row>
        </Content>
      </Layout>
    );
  }
}

export default App;
