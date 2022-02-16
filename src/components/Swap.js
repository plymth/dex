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
import {
  openSelectTokenModal,
  closeSelectTokenModal,
  exchange,
  setSwapFromToken,
  setSwapToToken,
  setSwapFromTokenAmount,
  setSwapToTokenAmount,
  removeSwapFromToken,
  removeSwapToToken,
} from '../features/swap/swapSlice';
import './Swap.css';

export class Swap extends Component {
  constructor(props) {
    super(props);

    this.setSelectTokenModalAction = this.setSelectTokenModalAction.bind(this);
  }

  setSelectTokenModalAction(tokenModalAction) {
    this.setToken = tokenModalAction;
    this.props.openSelectTokenModal();
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
            <SwapInput
              label="Swap from"
              token={this.props.swapFromToken}
              onChange={this.props.setSwapFromTokenAmount}
              autoFocus
            />
          </Col>
          <Col span={12}>
            <SwapTokenInput
              token={this.props.swapFromToken}
              removeToken={() => this.props.removeSwapFromToken()}
              setSelectTokenModalAction={() =>
                this.setSelectTokenModalAction(this.props.setSwapFromToken)
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
            <SwapInput
              label="Swap to"
              token={this.props.swapToToken}
              onChange={this.props.setSwapToTokenAmount}
            />
          </Col>
          <Col span={12}>
            <SwapTokenInput
              token={this.props.swapToToken}
              removeToken={() => this.props.removeSwapToToken()}
              setToken={this.props.setSwapToToken}
              setSelectTokenModalAction={() =>
                this.setSelectTokenModalAction(this.props.setSwapToToken)
              }
            />
          </Col>
        </Row>
        <Row style={{ paddingTop: '30px' }}>
          {(!this.props.swapFromToken || !this.props.swapToToken) && (
            <Col span={24}>
              <Button label="Enter an Amount" type="disabled" icon={false} />
            </Col>
          )}
          {this.props.swapFromToken && this.props.swapToToken && (
            <Col span={24}>
              <Button label="Swap" type="full" icon={false} />
            </Col>
          )}
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
          <SwapSelectTokenModal setToken={this.setToken} />
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSelectTokenModalVisible: state.swap.isSelectTokenModalVisible,
    swapFromToken: state.swap.swapFromToken,
    swapToToken: state.swap.swapToToken,
  };
};

const mapDispatchToProps = () => {
  return {
    openSelectTokenModal,
    closeSelectTokenModal,
    exchange,
    setSwapFromToken,
    setSwapToToken,
    setSwapFromTokenAmount,
    setSwapToTokenAmount,
    removeSwapFromToken,
    removeSwapToToken,
  };
};

export default connect(mapStateToProps, mapDispatchToProps())(Swap);
