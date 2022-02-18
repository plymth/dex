import React from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col, Divider } from 'antd';
import { ReactComponent as Button } from '../assets/switch.svg';
import { switchTokens } from '../actions/Swap.action';

export const SwapDivider = () => {
  const dispatch = useDispatch();

  return (
    <Row>
      <Col span={24}>
        <Divider style={{ borderColor: '#1c1924' }} orientation="right">
          <Button
            className="Swap__switch"
            onClick={() => dispatch(switchTokens())}
          />
        </Divider>
      </Col>
    </Row>
  );
};
