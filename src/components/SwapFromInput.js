import React from 'react';
import { Row, Col } from 'antd';
import { SwapInput } from './SwapInput';
import { SwapTokenInput } from './SwapTokenInput';
import {
  setSwapFromToken,
  setSwapFromTokenAmount,
  removeSwapFromToken,
  openSelectFromTokenModal,
} from '../actions/Swap.action';

export const SwapFromInput = (props) => {
  return (
    <Row align="middle">
      <Col span={12}>
        <SwapInput
          label="Swap from"
          token={props.token}
          setTokenAmount={setSwapFromTokenAmount}
          autoFocus={props.autoFocus}
        />
      </Col>
      <Col span={12}>
        <SwapTokenInput
          token={props.token}
          setToken={setSwapFromToken}
          removeToken={removeSwapFromToken}
          openSelectTokenModal={openSelectFromTokenModal}
        />
      </Col>
    </Row>
  );
};
