import React from 'react';
import { Row, Col } from 'antd';
import { ReactComponent as Question } from '../assets/question-help.svg';
import './SwapData.css';

export const SwapData = () => {
  return (
    <div className="SwapData">
      <Row>
        <Col span={14}>
          <div className="SwapData__label">Minimum received</div>
          <Question className="SwapData__help" />
        </Col>
        <Col span={10}>
          <div className="SwapData__amount">9.741INCH</div>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <div className="SwapData__label">Price Impact</div>
          <Question className="SwapData__help" />
        </Col>
        <Col span={12}>
          <div className="SwapData__impact">&lt;0.01%</div>
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <div className="SwapData__label">Liquidity Provider Fee</div>
          <Question className="SwapData__help" />
        </Col>
        <Col span={12}>
          <div className="SwapData__amount">0.00006 ETH</div>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div className="SwapData__analytics">View Pair Analytics</div>
        </Col>
      </Row>
    </div>
  );
};
