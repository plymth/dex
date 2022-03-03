import { useState } from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import { TokenInput } from './TokenInput';
import { TokenSelectInput } from './TokenSelectInput';
import { TokenSelectModal } from './TokenSelectModal';
import { Button } from './Button';

const StyledSwapRow = styled.div`
  /* margin-bottom: ${(props) => (props.readOnly ? '24px' : 0)}; */
`;

export const SwapRow = ({ label, token, type, autoFocus }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <StyledSwapRow>
        <Row align="middle">
          <Col span={12}>
            <TokenInput label={label} type={type} token={token} autoFocus />
          </Col>
          <Col span={12}>
            {!token && (
              <Button title="Select a Token" fixed onClick={showModal}></Button>
            )}
            {token && (
              <TokenSelectInput token={token} type={type} onClick={showModal} />
            )}
          </Col>
        </Row>
      </StyledSwapRow>
      <TokenSelectModal
        type={type}
        visible={isModalVisible}
        onCancel={handleCancel}
      />
    </>
  );
};
