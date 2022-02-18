import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from 'antd';
import { TransactionSettings } from './TransactionSettings';
import { closeTransactionSettingsModal } from '../actions/Swap.action';
import { selectIsTransactionSettingsModalOpen } from '../selectors/Swap.selector';
import './TransactionSettingsModal.css';

export const TransactionSettingsModal = () => {
  const isTransactionSettingsModalOption = useSelector(
    selectIsTransactionSettingsModalOpen
  );

  const dispatch = useDispatch();

  return (
    <Modal
      onCancel={() => dispatch(closeTransactionSettingsModal())}
      visible={isTransactionSettingsModalOption}
      className="TransactionSettingsModal"
      width={342}
      mask={false}
      modalRender={() => <TransactionSettings />}
    ></Modal>
  );
};
