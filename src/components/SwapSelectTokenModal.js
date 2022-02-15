import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';
import { ReactComponent as Search } from '../assets/search.svg';
import SwapSelectTokenModalRow from './SwapSelectTokenModalRow';
import './SwapSelectTokenModal.css';

export class SwapSelectTokenModal extends Component {
  constructor(props) {
    super(props);
    this.getContentClass = this.getContentClass.bind(this);
  }

  getContentClass() {
    return this.props.tokens.length > 7
      ? 'SwapSelectTokenModal__content--full'
      : 'SwapSelectTokenModal__content';
  }

  render() {
    return (
      <div className="SwapSelectTokenModal">
        <Row justify="center">
          <Col span={24}>
            <div className="SwapSelectTokenModal__title">Select a Token</div>
          </Col>
        </Row>
        <Row align="middle" className="SwapSelectTokenModal__input">
          <Col span={20}>
            <input type="text" placeholder="Search name or paste address" />
          </Col>
          <Col span={4}>
            <Search className="SwapSelectTokenModal__search-icon" />
          </Col>
        </Row>
        <div className={this.getContentClass()}>
          {this.props.tokens.map((token, index) => (
            <SwapSelectTokenModalRow token={token} key={index} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tokens: state.swap.tokens,
  };
};

export default connect(mapStateToProps, null)(SwapSelectTokenModal);
