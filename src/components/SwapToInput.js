import { Row, Col } from 'antd';
import { SwapInput } from './SwapInput';
import { SwapTokenInput } from './SwapTokenInput';
import {
  setSwapToToken,
  setSwapToTokenAmount,
  removeSwapToToken,
  openSelectToTokenModal,
} from '../features/swap/swapSlice';

export const SwapToInput = (props) => {
  return (
    <Row align="middle">
      <Col span={12}>
        <SwapInput
          token={props.token}
          setTokenAmount={setSwapToTokenAmount}
        />
      </Col>
      <Col span={12}>
        <SwapTokenInput
          token={props.token}
          setToken={setSwapToToken}
          removeToken={removeSwapToToken}
          openSelectTokenModal={openSelectToTokenModal}
        />
      </Col>
    </Row>
  );
};