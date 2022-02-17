import React from 'react';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import { Layout, Col, Row } from 'antd';
import './App.css';
import { Navbar } from './Navbar';
import { Swap } from './Swap';
import { Pool } from './Pool';
import { About } from './About';
import { Vote } from './Vote';
import { Charts } from './Charts';

const { Header, Content } = Layout;

export const App = () => {
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
              <Route path="/charts" element={<Charts />} />
              <Route path="*" element={<Navigate to="/swap" replace />} />
            </Routes>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};
