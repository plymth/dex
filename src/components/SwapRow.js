import styled from 'styled-components';
import { Row, Col } from 'antd';
import { TokenInput } from './TokenInput';
import { TokenSelectInput } from './TokenSelectInput';
import { openTokenSelectModal } from '../actions/Swap.action';
import { TokenSelectModal } from './TokenSelectModal';
import { Button } from './Button';

const StyledSwapRow = styled.div`
  margin-bottom: ${(props) => (props.readOnly ? '24px' : 0)};
`;

export const SwapRow = ({ token, readOnly, removeToken, setToken }) => {
  return (
    <>
      <StyledSwapRow readOnly={readOnly}>
        <Row align="middle">
          <Col span={12}>
            <TokenInput token={token} setToken={setToken} />
          </Col>
          <Col span={12}>
            {!token && (
              <Button
                title="Select a Token"
                fixed
                onClick={openTokenSelectModal}
              ></Button>
            )}
            {token && (
              <TokenSelectInput
                token={token}
                setToken={setToken}
                removeToken={removeToken}
              />
            )}
          </Col>
        </Row>
      </StyledSwapRow>
      <TokenSelectModal setToken={setToken} />
    </>
  );
};
