import React, { Component } from 'react';
import { InputNumber } from 'antd';
import './SwapInput.css';

export class SwapInput extends Component {
  render() {
    return (
      <div className="SwapInput">
        <div className="SwapInput__label">{this.props.label}</div>
        <div
          className={
            this.props.token && this.props.token.amount > 0
              ? 'SwapInput__amount--filled'
              : 'SwapInput__amount'
          }
        >
          <InputNumber
            value={this.props.token ? this.props.token.amount : null}
            placeholder={0}
            bordered={false}
            controls={false}
            style={{ width: '100%' }}
            disabled={this.props.token ? false : true}
            autoFocus={this.props.autoFocus}
            onChange={(value) => this.props.onChange(value)}
          />
        </div>
        <div className="SwapInput__balance">Balance: {this.props.balance}</div>
      </div>
    );
  }
}

export default SwapInput;
