import React, { Component } from 'react';
import { connect } from 'react-redux';
import { InputNumber } from 'antd';
import './SwapInput.css';
import {
  setSwapFromTokenAmount,
  setSwapToTokenAmount,
} from '../features/swap/swapSlice';

export class SwapInput extends Component {
  constructor(props) {
    super(props);

    this.setTokenAmount = this.setTokenAmount.bind(this);
    this.getTokenAmountClass = this.getTokenAmountClass.bind(this);
    this.getDefaultValue = this.getDefaultValue.bind(this);
  }

  setTokenAmount(value) {
    if (this.props.from) {
      this.props.setSwapFromTokenAmount(value);
    }

    if (this.props.to) {
      this.props.setSwapToTokenAmount(value);
    }
  }

  getTokenAmountClass() {
    if (this.props.from) {
      return this.props.swapFromToken && this.props.swapFromToken.amount > 0
        ? 'SwapInput__amount--filled'
        : 'SwapInput__amount';
    }

    if (this.props.to) {
      return this.props.swapToToken && this.props.swapToToken.amount > 0
        ? 'SwapInput__amount--filled'
        : 'SwapInput__amount';
    }
  }

  getDefaultValue() {
    if (this.props.from) {
      return this.props.swapFromToken && this.props.swapFromToken.amount
        ? this.props.swapFromToken.amount
        : 0;
    }
    if (this.props.to) {
      return this.props.swapToToken && this.props.swapToToken.amount
        ? this.props.swapToToken.amount
        : 0;
    }
  }

  render() {
    return (
      <div className="SwapInput">
        <div className="SwapInput__label">{this.props.label}</div>
        <div className={this.getTokenAmountClass()}>
          <InputNumber
            // defaultValue={
            //   this.props.swapFromToken && this.props.swapFromToken.amount
            //     ? this.props.swapFromToken.amount
            //     : 0
            // }
            value={
              this.getDefaultValue()
              // this.props.swapFromToken && this.props.swapFromToken.amount
              //   ? this.props.swapFromToken.amount
              //   : 0
            }
            bordered={false}
            controls={false}
            style={{ width: '100%' }}
            disabled={this.props.token ? false : true}
            autoFocus={this.props.autoFocus}
            onChange={(value) => this.setTokenAmount(value)}
          />
        </div>
        <div className="SwapInput__balance">Balance: {this.props.balance}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    swapFromToken: state.swap.swapFromToken,
    swapToToken: state.swap.swapToToken,
  };
};

const mapDispatchToProps = () => {
  return {
    setSwapFromTokenAmount,
    setSwapToTokenAmount,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(SwapInput);
