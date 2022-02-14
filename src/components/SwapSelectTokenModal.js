import React, { Component } from 'react';
import { Row, Col } from 'antd';
import { ReactComponent as Search } from '../assets/search.svg';
import bitcoin from '../assets/bitcoin-btc-logo.png';
import ethereum from '../assets/ethereum-eth-logo.png';
import tether from '../assets/tether-usdt-logo.png';
import litecoin from '../assets/litecoin-ltc-logo.png';
import fantom from '../assets/fantom-ftm-logo.png';
import monero from '../assets/monero-xmr-logo.png';
import polygon from '../assets/polygon-matic-logo.png';
import compound from '../assets/compound-comp-logo.png';
import flow from '../assets/flow-flow-logo.png';
import sushiswap from '../assets/sushiswap-sushi-logo.png';
import SwapSelectTokenModalRow from './SwapSelectTokenModalRow';
import './SwapSelectTokenModal.css';

export class SwapSelectTokenModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tokens: [
        {
          name: 'Bitcoin',
          symbol: 'BTC',
          icon: bitcoin,
          amount: '0.002638 BTC',
        },
        {
          name: 'Ethereum',
          symbol: 'ETH',
          icon: ethereum,
          amount: '0.007363 ETH',
        },
        {
          name: 'Tether',
          symbol: 'USDT',
          icon: tether,
          amount: '0.36432 USDT',
        },
        {
          name: 'Litecoin',
          symbol: 'LTC',
          icon: litecoin,
          amount: '0.008367 LTC',
        },
        {
          name: 'Fantom',
          symbol: 'FTM',
          icon: fantom,
          amount: '0.0008563 FTM',
        },
        {
          name: 'Monero',
          symbol: 'XMR',
          icon: monero,
          amount: '0.009253 XMR',
        },
        {
          name: 'Polygon',
          symbol: 'MATIC',
          icon: polygon,
          amount: '0.005372 MATIC',
        },
        {
          name: 'Compound',
          symbol: 'COMP',
          icon: compound,
          amount: '0.0253 COMP',
        },
        {
          name: 'Flow',
          symbol: 'FLOW',
          icon: flow,
          amount: '0.02692 FLOW',
        },
        {
          name: 'SushiSwap',
          symbol: 'SUSHI',
          icon: sushiswap,
          amount: '0.04382 SUSHI',
        },
      ],
    };

    this.getContentClass = this.getContentClass.bind(this);
  }

  getContentClass() {
    return this.state.tokens.length > 7
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
          {this.state.tokens.map((token, index) => (
            <SwapSelectTokenModalRow token={token} key={index} />
          ))}
        </div>
      </div>
    );
  }
}

export default SwapSelectTokenModal;
