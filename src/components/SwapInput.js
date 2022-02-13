import React, { Component } from 'react'
import { InputNumber } from 'antd';
import './SwapInput.css';

export class SwapInput extends Component {
  render() {
    return (
      <div className="SwapInput">
        <div className="SwapInput__label">
          {this.props.label}
        </div>
        <div className="SwapInput__amount">
          <InputNumber defaultValue={this.props.amount} bordered={false} controls={false} style={{ width: '100%' }} disabled={this.props.disabled} autoFocus={this.props.autoFocus} />
        </div>
        <div className="SwapInput__balance">
          Balance: {this.props.balance}
        </div>
      </div>
    )
  }
}

export default SwapInput