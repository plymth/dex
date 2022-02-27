import { Row, Col, Switch, Tooltip } from 'antd';
import styled from 'styled-components';
import { ReactComponent as Question } from '../assets/question-help.svg';
import { SLIPPAGE_TOLERANCE } from '../constants/Tooltip.constants';

const StyledTransactionSettings = styled.div`
  width: auto;
  height: auto;
  pointer-events: auto;
`;

const Title = styled.div`
  font-size: 20px;
  line-height: 28px;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  margin-bottom: 32px;
`;

const TitleInterface = styled.div`
  font-size: 20px;
  line-height: 28px;
  font-weight: 700;
  color: #ffffff;
  text-align: left;
  margin-bottom: 32px;
`;

const Label = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  display: inline-block;
  margin-bottom: 16px;
  margin-right: 8px;
`;

const LabelMinutes = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #a6a0bb;
  display: inline-block;
  margin-bottom: 16px;
  margin-left: 16px;
  margin-top: 4px;
`;

const StyledQuestion = styled(Question)`
  display: inline-block;
  vertical-align: middle;
`;

const Input = styled.input`
  border: none;
  border-radius: 8px;
  outline: none;
  background-color: #2f2a3c;
  padding: 8px 10px;
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  ::placeholder {
    color: #a6a0bb;
  }
`;

const InputMinutes = styled.input`
  border: none;
  border-radius: 8px;
  outline: none;
  background-color: #2f2a3c;
  padding: 8px;
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-bottom: 32px;
  display: inline-block;
  ::placeholder {
    color: #a6a0bb;
  }
`;

const StyledSwitch = styled(Switch)`
  &.ant-switch {
    background-color: #2f2a3c;
  }
  &.ant-switch-checked {
    background-color: #a869ed;
  }
  &.ant-switch-checked:focus {
    box-shadow: none;
  }
  float: right;
`;

const Spacer = styled.div`
  height: 32px;
`;

export const TransactionSettings = () => {
  return (
    <StyledTransactionSettings>
      <Row>
        <Col span={24}>
          <Title>Transaction Settings</Title>
        </Col>
      </Row>
      <Row>
        <Col>
          <Label>Slippage Tolerance</Label>
          <Tooltip title={SLIPPAGE_TOLERANCE}>
            <StyledQuestion />
          </Tooltip>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <Input placeholder="0.01%" autoFocus />
        </Col>
        <Col span={6}>
          <Input placeholder="0.01%" />
        </Col>
        <Col span={6}>
          <Input placeholder="0.01%" />
        </Col>
        <Col span={6}>
          <Input placeholder="0.01%" />
        </Col>
      </Row>
      <Spacer />
      <Row>
        <Col>
          <Label>Transaction Deadline</Label>
          <StyledQuestion />
        </Col>
      </Row>
      <Row>
        <Col span={10}>
          <InputMinutes placeholder="20" />
        </Col>
        <Col>
          <LabelMinutes>minutes</LabelMinutes>
        </Col>
      </Row>
      <Row>
        <Col>
          <TitleInterface>Interface Settings</TitleInterface>
        </Col>
      </Row>
      <Row>
        <Col span={18}>
          <Label>Toggle Expert Mode</Label>
          <StyledQuestion />
        </Col>
        <Col span={6}>
          <StyledSwitch />
        </Col>
      </Row>
      <Row>
        <Col span={18}>
          <Label>Disable Multihops</Label>
          <StyledQuestion />
        </Col>
        <Col span={6}>
          <StyledSwitch />
        </Col>
      </Row>
    </StyledTransactionSettings>
  );
};
