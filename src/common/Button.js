import { Row, Col } from 'antd';
import { ReactComponent as Caret } from '../assets/caret.svg';
import './Button.css';

export const Button = (props) => {
  const className = () => (props.type ? `Button--${props.type}` : 'Button');

  return (
    <button className={className()} onClick={props.onClick}>
      <Row align="middle">
        <Col span={props.icon ? 20 : 24}>{props.label}</Col>
        {props.icon && (
          <Col>
            <Caret className="Button__icon" />
          </Col>
        )}
      </Row>
    </button>
  );
};
