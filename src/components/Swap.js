import React, { Component } from 'react';
import { Row, Col, Divider, Modal } from 'antd';
import { SettingOutlined } from '@ant-design/icons/lib/icons';
import SwapInput from './SwapInput';
import SwapTokenInput from './SwapTokenInput';
import Button from '../common/Button';
import { ReactComponent as ExchangeBtn } from '../assets/exchange-btn.svg';
import avalanche from '../assets/avalanche.svg';
import './Swap.css';

export class Swap extends Component {
  render() {
    return (
      <div className="Swap">
        <Row align="middle" justify="center">
          <Col span={24}>
            <SettingOutlined className="Swap__setting" />
            <div className="Swap__heading">
              Swap
            </div>
          </Col>
        </Row>
        <Row align="middle">
          <Col span={12}>
            <SwapInput label="Swap from" amount={0} balance={70.42} autoFocus />
          </Col>
          <Col span={12}>
            <SwapTokenInput symbol="AVAX" token={avalanche} />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Divider style={{ borderColor: '#1c1924' }} orientation="right">
              <ExchangeBtn className="Swap__exchange-btn" />
            </Divider>
          </Col>
        </Row>
        <Row align="middle">
          <Col span={12}>
            <SwapInput label="Swap to" amount={0} balance="-" />
          </Col>
          <Col span={12}>
            <Button label="Select a Token" icon />
            {/* <SwapTokenInput symbol="1INCH" token={avalanche} /> */}
          </Col>
        </Row>
        <Row style={{ paddingTop: '30px'}}>
          <Col span={24}>
            <Button label="Enter an Amount" type="disabled" icon={false} />
            <Modal visible maskStyle={{ backdropFilter: 'blur(8px)' }}>
              Some modal
            </Modal>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Swap