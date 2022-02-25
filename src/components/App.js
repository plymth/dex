import { Routes, Route, NavLink, Navigate } from 'react-router-dom';
import styled from 'styled-components';
import { Layout, Col, Row } from 'antd';
import { Navbar } from './Navbar';
import { Swap } from './Swap';
import { Pool } from './Pool';
import { About } from './About';
import { Vote } from './Vote';
import { Charts } from './Charts';
import './App.css';

const { Header, Content } = Layout;

const StyledLayout = styled(Layout)`
  width: 1440px;
  background-color: #09080c;
  margin: auto;
`;

const StyledHeader = styled(Header)`
  background-color: #09080c;
  margin: 20px 0 64px 0;
`;

const StyledContent = styled(Content)`
  height: 100vh;
  background-color: #09080c;
`;

export const App = () => {
  return (
    <StyledLayout>
      <StyledHeader className="App__header">
        <Navbar />
      </StyledHeader>
      <StyledContent className="App__content">
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
      </StyledContent>
    </StyledLayout>
  );
};
