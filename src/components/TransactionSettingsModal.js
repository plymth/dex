import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Modal } from 'antd';
import { TransactionSettings } from './TransactionSettings';
import { closeTransactionSettingsModal } from '../actions/Swap.action';
import { selectIsTransactionSettingsModalOpen } from '../selectors/Swap.selector';

const StyledModal = styled(Modal)`
  background-color: #1c1924;
  padding: 24px;
  top: 220px;
  left: 30px;
  border-radius: 8px;
`;

export const TransactionSettingsModal = () => {
  const isTransactionSettingsModalOpen = useSelector(
    selectIsTransactionSettingsModalOpen
  );

  const dispatch = useDispatch();

  return (
    <StyledModal
      mask={false}
      onCancel={() => dispatch(closeTransactionSettingsModal())}
      visible={isTransactionSettingsModalOpen}
      width={342}
      modalRender={() => <TransactionSettings />}
    ></StyledModal>
  );
};
