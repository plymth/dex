import styled from 'styled-components';
import { Row, Col } from 'antd';
import { TokenInput } from './TokenInput';
import { TokenSelectInput } from './TokenSelectInput';

const StyledSwapRow = styled.div`
  margin-bottom: ${(props) => (props.readOnly ? '24px' : 0)};
`;

export const SwapRow = (props) => {
  return (
    <StyledSwapRow readOnly={props.readOnly}>
      <Row align="middle">
        <Col span={12}>
          <TokenInput />
        </Col>
        <Col span={12}>
          <TokenSelectInput />
        </Col>
      </Row>
    </StyledSwapRow>
  );
};
