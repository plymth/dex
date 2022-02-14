import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './SwapSelectTokenModalRow.css';
import { connect } from 'react-redux';
import store from '../store';
import { setSwapFromToken, setSwapToToken } from '../features/swap/swapSlice';

export class SwapSelectTokenModalRow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Row
        align="middle"
        className="SwapSelectTokenModalRow"
        onClick={() =>
          this.props.swapFrom
            ? this.props.setSwapFromToken(this.props.token)
            : this.props.setSwapToToken(this.props.token)
        }
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

const mapStateToProps = (state) => {
  return {
    swapFrom: state.swap.swapFrom,
  };
};

const mapDispatchToProps = () => {
  return {
    setSwapFromToken,
    setSwapToToken,
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps()
)(SwapSelectTokenModalRow);
