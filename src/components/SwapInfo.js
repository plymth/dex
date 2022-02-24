import styled from 'styled-components';
import { Row, Col } from 'antd';

const StyledSwapInfo = styled.div`
  margin-bottom: 32px;
`;

const Label = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: #a6a0bb;
  margin-bottom: 10px;
`;

const Value = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  margin-bottom: 10px;
  text-align: right;
`;

export const SwapInfo = () => {
  return (
    <StyledSwapInfo>
      <Row align="middle">
        <Col span={14}>
          <Label>Minimum received</Label>
        </Col>
        <Col span={10}>
          <Value>9.741INCH</Value>
        </Col>
        <Col span={14}>
          <Label>Price Impact</Label>
        </Col>
        <Col span={10}>
          <Value>0.01%</Value>
        </Col>
        <Col span={14}>
          <Label>Liquidity Provider Fee</Label>
        </Col>
        <Col span={10}>
          <Value>0.000432ETH</Value>
        </Col>
      </Row>
    </StyledSwapInfo>
  );
};
