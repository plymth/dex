import React from 'react';
import { useDispatch } from 'react-redux';
import { Row, Col } from 'antd';
import './SwapSelectTokenModalRow.css';

export const SwapSelectTokenModalRow = (props) => {
  const dispatch = useDispatch();

  const setToken = () => {
    dispatch(props.setToken(props.token));
  };

  return (
    <Row
      align="middle"
      className="SwapSelectTokenModalRow"
      onClick={() => setToken()}
    >
      <Col span={4}>
        <img
          src={props.token.icon}
          className="SwapSelectTokenModalRow__icon"
          alt=""
        />
      </Col>
      <Col span={10}>
        <div className="SwapSelectTokenModalRow__name">{props.token.name}</div>
      </Col>
      <Col span={10}>
        <div className="SwapSelectTokenModalRow__amount">
          {props.token.amount}
        </div>
      </Col>
    </Row>
  );
};
