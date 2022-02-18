import { useDispatch } from 'react-redux';
import { Row, Col, Avatar } from 'antd';
import { ReactComponent as Caret } from '../assets/caret.svg';
import { ReactComponent as Close } from '../assets/close-circle.svg';
import {Button} from '../common/Button';

import './SwapTokenInput.css';

export const SwapTokenInput = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="SwapTokenInput">
      {props.token && (
        <Row align="middle" justify="end">
          <Col>
            <Close
              className="SwapTokenInput__close"
              onClick={() => dispatch(props.removeToken())}
            />
          </Col>
          <Col onClick={() => dispatch(props.openSelectTokenModal())}>
            <Avatar src={props.token.icon} className="SwapTokenInput__icon" />
          </Col>
          <Col onClick={() => dispatch(props.openSelectTokenModal())}>
            <div className="SwapTokenInput__symbol">{props.token.symbol}</div>
          </Col>
          <Col onClick={() => dispatch(props.openSelectTokenModal())}>
            <Caret className="SwapTokenInput__caret" />
          </Col>
        </Row>
      )}
      {!props.token && (
        <Button
          label="Select a Token"
          icon
          onClick={() => dispatch(props.openSelectTokenModal())}
        />
      )}
    </div>
  );
};
