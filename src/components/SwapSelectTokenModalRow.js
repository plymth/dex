import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './SwapSelectTokenModalRow.css';

export class SwapSelectTokenModalRow extends Component {
  constructor(props) {
    super(props);

    this.setToken = this.setToken.bind(this);
  }

  setToken() {
    this.props.setToken(this.props.token);
  }

  render() {
    return (
      <Row
        align="middle"
        className="SwapSelectTokenModalRow"
        onClick={() => this.setToken()}
      >
        <Col span={4}>
          <img
            src={this.props.token.icon}
            className="SwapSelectTokenModalRow__icon"
            alt=""
          />
        </Col>
        <Col span={10}>
          <div className="SwapSelectTokenModalRow__name">
            {this.props.token.name}
          </div>
        </Col>
        <Col span={10}>
          <div className="SwapSelectTokenModalRow__amount">
            {this.props.token.amount}
          </div>
        </Col>
      </Row>
    );
  }
}

export default SwapSelectTokenModalRow;
