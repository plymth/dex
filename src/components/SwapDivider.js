import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Row, Col, Divider } from 'antd';
import { ReactComponent as Button } from '../assets/exchange-btn.svg';
import { switchTokens } from '../features/swap/swapSlice';

export const SwapDivider = () => {
  const dispatch = useDispatch();

  return (
    <Row>
      <Col span={24}>
        <Divider style={{ borderColor: '#1c1924' }} orientation="right">
          <Button
            className="Swap__exchange-btn"
            onClick={() => dispatch(switchTokens())}
          />
        </Divider>
      </Col>
    </Row>
  );
};
