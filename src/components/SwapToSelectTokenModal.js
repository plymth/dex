import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from 'antd';
import { SwapSelectTokenModal } from './SwapSelectTokenModal';
import { ReactComponent as Close } from '../assets/close-small.svg';
import {
  selectIsSelectToTokenModalVisible,
  closeSelectToTokenModal,
  setSwapToToken,
} from '../features/swap/swapSlice';

export const SwapToSelectTokenModal = () => {
  const isSelectToTokenModalVisible = useSelector(
    selectIsSelectToTokenModalVisible
  );

  const dispatch = useDispatch();

  return (
    <Modal
      footer={null}
      visible={isSelectToTokenModalVisible}
      maskStyle={{ backdropFilter: 'blur(8px)' }}
      onCancel={() => dispatch(closeSelectToTokenModal())}
      className="SwapSelectTokenModal"
      bodyStyle={{ boxShadow: 'none', backgroundColor: '#131118' }}
      width={464}
      closeIcon={<Close />}
    >
      <SwapSelectTokenModal setToken={setSwapToToken} />
    </Modal>
  );
};
