import React, { Component } from 'react';
import { Row, Col, Avatar } from 'antd';
import { ReactComponent as Caret } from '../assets/caret.svg';
import './SwapTokenInput.css';

export class SwapTokenInput extends Component {
  render() {
    return (
      <div className="SwapTokenInput" onClick={this.props.onClick}>
        <Row align="middle" justify="end">
          <Col>
            <Avatar src={this.props.token.icon} className="SwapTokenInput__icon" />
          </Col>
          <Col>
            <div className="SwapTokenInput__symbol">{this.props.token.symbol}</div>
          </Col>
          <Col>
            <Caret className="SwapTokenInput__caret" />
          </Col>
        </Row>
      </div>
    );
  }
}

export default SwapTokenInput;
