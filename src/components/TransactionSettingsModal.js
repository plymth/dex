import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from 'antd';
import { TransactionSettings } from './TransactionSettings';
import { closeTransactionSettingsModal } from '../actions/Swap.action';
import { selectIsTransactionSettingsModalOpen } from '../selectors/Swap.selector';
import './TransactionSettingsModal.css';

export const TransactionSettingsModal = () => {
  const isTransactionSettingsModalOpen = useSelector(
    selectIsTransactionSettingsModalOpen
  );

  const dispatch = useDispatch();

  return (
    <Modal
      mask={false}
      onCancel={() => dispatch(closeTransactionSettingsModal())}
      visible={isTransactionSettingsModalOpen}
      className="TransactionSettingsModal ant-modal-content"
      width={342}
      modalRender={() => <TransactionSettings />}
    ></Modal>
  );
};
