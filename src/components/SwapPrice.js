import styled from 'styled-components';
import { Row, Col } from 'antd';
import { ReactComponent as Exchange } from '../assets/exchange.svg';

const StyledSwapPrice = styled.div`
  font-size: 16px;
  line-height: 24px;
  color: #a6a0bb;
  padding: 24px 0 24px 0;
`;

const Price = styled.div`
  text-align: right;
  margin-right: 8px;
`;

const StyledExchange = styled(Exchange)`
  display: block;
  cursor: pointer;
  float: right;
`;

export const SwapPrice = () => {
  return (
    <StyledSwapPrice>
      <Row align="middle">
        <Col span={4}>Price</Col>
        <Col span={18}>
          <Price>0.002167 ETH per 1INCH</Price>
        </Col>
        <Col span={2}>
          <StyledExchange />
        </Col>
      </Row>
    </StyledSwapPrice>
  );
};
