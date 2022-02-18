import { Row, Col, Switch } from 'antd';
import { ReactComponent as Question } from '../assets/question-help.svg';
import './TransactionSettings.css';

export const TransactionSettings = () => {
  return (
    <div className="TransactionSettings">
      <Row justify="center">
        <Col span={24}>
          <div className="TransactionSettings__heading">
            Transaction Settings
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="TransactionSettings__label">Slippage Tolerance</div>
          <Question className="TransactionSettings__help" />
        </Col>
      </Row>
      <Row gutter={16} className="TransactionSettings__slippage">
        <Col span={6}>
          <input
            type="text"
            placeholder="0.1%"
            className="TransactionSettings__input"
          />
        </Col>
        <Col span={6}>
          <input
            type="text"
            placeholder="0.1%"
            className="TransactionSettings__input"
          />
        </Col>
        <Col span={6}>
          <input
            type="text"
            placeholder="0.1%"
            className="TransactionSettings__input"
          />
        </Col>
        <Col span={6}>
          <input
            type="text"
            placeholder="0.1%"
            className="TransactionSettings__input"
          />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <div className="TransactionSettings__label">Transaction Deadline</div>
          <Question className="TransactionSettings__help" />
        </Col>
      </Row>
      <Row>
        <Col span={10}>
          <input
            type="text"
            placeholder="20"
            className="TransactionSettings__input--minutes"
          />
        </Col>
        <Col span={14}>
          <div className="TransactionSettings__label--minutes">minutes</div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="TransactionSettings__heading--interface">
            Interface Settings
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={18}>
          <div className="TransactionSettings__label">Toggle Expert Mode</div>
          <Question className="TransactionSettings__help" />
        </Col>
        <Col span={6}>
          <Switch className="TransactionSettings__switch" />
        </Col>
      </Row>
      <Row>
        <Col span={18}>
          <div className="TransactionSettings__label"> Disable Multihops</div>
          <Question className="TransactionSettings__help" />
        </Col>
        <Col span={6}>
          <Switch className="TransactionSettings__switch" />
        </Col>
      </Row>
    </div>
  );
};
