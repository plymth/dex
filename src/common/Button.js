import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { ReactComponent as Caret } from '../assets/caret.svg';
import './Button.css';

export class Button extends Component {
  constructor(props) {
    super(props)

    this.state = {
      className: this.props.type ? `Button--${this.props.type}` : 'Button'
    }
  }

  render() {
    return (
      <button className={this.state.className}>
        <Row align="middle">
          <Col span={this.props.icon ? 20 : 24}>{this.props.label} {this.state.first}</Col>
          {this.props.icon && <Col><Caret className="Button__icon" /></Col>}
        </Row>
      </button>
    )
  }
}

export default Button