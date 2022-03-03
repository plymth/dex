import styled from 'styled-components';
import { Modal } from 'antd';
import { TransactionSettings } from './TransactionSettings';

const StyledModal = styled(Modal)`
  background-color: #1c1924;
  padding: 24px;
  top: 220px;
  left: 30px;
  border-radius: 8px;
`;

export const TransactionSettingsModal = () => {
  return (
    <StyledModal
      mask={false}
      width={342}
      modalRender={() => <TransactionSettings />}
    ></StyledModal>
  );
};
