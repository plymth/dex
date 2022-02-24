import styled from 'styled-components';
import { Row, Col } from 'antd';
import { TokenInput } from './TokenInput';
import { TokenSelectInput } from './TokenSelectInput';
import { Button } from './Button';

const StyledSwapRow = styled.div`
  margin-bottom: ${(props) => (props.readOnly ? '24px' : 0)};
`;

export const SwapRow = ({ token, readOnly, onRemove }) => {
  return (
    <StyledSwapRow readOnly={readOnly}>
      <Row align="middle">
        <Col span={12}>{token && <TokenInput token={token} />}</Col>
        <Col span={12}>
          {!token && <Button title="Select a Token" fixed></Button>}
          {token && <TokenSelectInput token={token} onRemove={onRemove} />}
        </Col>
      </Row>
    </StyledSwapRow>
  );
};
