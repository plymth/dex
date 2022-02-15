import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Avatar } from 'antd';
import { ReactComponent as Caret } from '../assets/caret.svg';
import { ReactComponent as Close } from '../assets/close-circle.svg';
import './SwapTokenInput.css';
import {
  openSelectTokenModal,
  removeSwapFromToken,
  removeSwapToToken,
} from '../features/swap/swapSlice';

export class SwapTokenInput extends Component {
  render() {
    return (
      <div className="SwapTokenInput" onClick={this.props.onClick}>
        <Row align="middle" justify="end">
          <Col>
            <Close
              className="SwapTokenInput__close"
              onClick={() =>
                this.props.from
                  ? this.props.removeSwapFromToken()
                  : this.props.removeSwapToToken()
              }
            />
          </Col>
          <Col
            onClick={() => this.props.openSelectTokenModal({ swapFrom: true })}
          >
            <Avatar
              src={this.props.token.icon}
              className="SwapTokenInput__icon"
            />
          </Col>
          <Col
            onClick={() => this.props.openSelectTokenModal({ swapFrom: true })}
          >
            <div className="SwapTokenInput__symbol">
              {this.props.token.symbol}
            </div>
          </Col>
          <Col
            onClick={() => this.props.openSelectTokenModal({ swapFrom: true })}
          >
            <Caret className="SwapTokenInput__caret" />
          </Col>
        </Row>
      </div>
    );
  }
}

const mapDispatchToProps = () => {
  return {
    openSelectTokenModal,
    removeSwapFromToken,
    removeSwapToToken,
  };
};

export default connect(null, mapDispatchToProps())(SwapTokenInput);
