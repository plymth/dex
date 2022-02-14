import React, { Component } from 'react';
import { Row, Col, Divider, Modal } from 'antd';
import { SettingOutlined } from '@ant-design/icons/lib/icons';
import SwapInput from './SwapInput';
import SwapTokenInput from './SwapTokenInput';
import SwapSelectTokenModal from './SwapSelectTokenModal';
import Button from '../common/Button';
import { ReactComponent as ExchangeBtn } from '../assets/exchange-btn.svg';
import { ReactComponent as Close } from '../assets/close-small.svg';
import { connect } from 'react-redux';
import store from '../store';
import {
  openSelectTokenModal,
  closeSelectTokenModal,
  exchange
} from '../features/swap/swapSlice';
import './Swap.css';

export class Swap extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Swap">
        <Row align="middle" justify="center">
          <Col span={24}>
            <SettingOutlined className="Swap__setting" />
            <div className="Swap__heading">Swap</div>
          </Col>
        </Row>
        <Row align="middle">
          <Col span={12}>
            <SwapInput label="Swap from" amount={0} balance={70.42} autoFocus />
          </Col>
          <Col span={12}>
            <SwapTokenInput
              token={this.props.swapFromToken}
              onClick={() =>
                this.props.openSelectTokenModal({ swapFrom: true })
              }
            />
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Divider style={{ borderColor: '#1c1924' }} orientation="right">
              <ExchangeBtn
                className="Swap__exchange-btn"
                onClick={() => this.props.exchange()}
              />
            </Divider>
          </Col>
        </Row>
        <Row align="middle">
          <Col span={12}>
            <SwapInput label="Swap to" amount={0} balance="-" />
          </Col>
          <Col span={12}>
            {!this.props.swapToToken && (
              <Button
                label="Select a Token"
                icon
                onClick={() =>
                  this.props.openSelectTokenModal({ swapFrom: false })
                }
              />
            )}
            {this.props.swapToToken && (
              <SwapTokenInput
                token={this.props.swapToToken}
                onClick={() =>
                  this.props.openSelectTokenModal({ swapFrom: false })
                }
              />
            )}
          </Col>
        </Row>
        <Row style={{ paddingTop: '30px' }}>
          <Col span={24}>
            <Button label="Enter an Amount" type="disabled" icon={false} />
          </Col>
        </Row>
        <Modal
          footer={null}
          visible={this.props.isSelectTokenModalVisible}
          maskStyle={{ backdropFilter: 'blur(8px)' }}
          onCancel={() => this.props.closeSelectTokenModal()}
          className="SwapSelectTokenModal"
          bodyStyle={{ boxShadow: 'none', backgroundColor: '#131118' }}
          width={464}
          closeIcon={<Close />}
        >
          <SwapSelectTokenModal />
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSelectTokenModalVisible: state.swap.isSelectTokenModalVisible,
    greeting: state.swap.greeting,
    swapFromToken: state.swap.swapFromToken,
    swapToToken: state.swap.swapToToken,
  };
};

const mapDispatchToProps = () => {
  return {
    openSelectTokenModal,
    closeSelectTokenModal,
    exchange,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Swap);
