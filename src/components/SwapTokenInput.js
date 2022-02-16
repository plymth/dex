import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Row, Col, Avatar } from 'antd';
import { ReactComponent as Caret } from '../assets/caret.svg';
import { ReactComponent as Close } from '../assets/close-circle.svg';
import Button from '../common/Button';
import { openSelectTokenModal } from '../features/swap/swapSlice';
import './SwapTokenInput.css';

export class SwapTokenInput extends Component {
  render() {
    return (
      <div className="SwapTokenInput">
        {this.props.token && (
          <Row align="middle" justify="end">
            <Col>
              <Close
                className="SwapTokenInput__close"
                onClick={this.props.removeToken}
              />
            </Col>
            <Col onClick={() => this.props.setSelectTokenModalAction()}>
              <Avatar
                src={this.props.token.icon}
                className="SwapTokenInput__icon"
              />
            </Col>
            <Col onClick={() => this.props.setSelectTokenModalAction()}>
              <div className="SwapTokenInput__symbol">
                {this.props.token.symbol}
              </div>
            </Col>
            <Col onClick={() => this.props.setSelectTokenModalAction()}>
              <Caret className="SwapTokenInput__caret" />
            </Col>
          </Row>
        )}
        {!this.props.token && (
          <Button
            label="Select a Token"
            icon
            onClick={() => this.props.setSelectTokenModalAction()}
          />
        )}
      </div>
    );
  }
}

const mapDispatchToProps = () => {
  return {
    openSelectTokenModal,
  };
};

export default connect(null, mapDispatchToProps())(SwapTokenInput);
