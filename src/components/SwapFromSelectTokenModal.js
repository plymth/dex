import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from 'antd';
import { SwapSelectTokenModal } from './SwapSelectTokenModal';
import { ReactComponent as Close } from '../assets/close-small.svg';
import {
  selectIsSelectFromTokenModalVisible,
  closeSelectFromTokenModal,
  setSwapFromToken,
} from '../features/swap/swapSlice';

export const SwapFromSelectTokenModal = () => {
  const isSelectFromTokenModalVisible = useSelector(
    selectIsSelectFromTokenModalVisible
  );

  const dispatch = useDispatch();

  return (
    <Modal
      footer={null}
      visible={isSelectFromTokenModalVisible}
      maskStyle={{ backdropFilter: 'blur(8px)' }}
      onCancel={() => dispatch(closeSelectFromTokenModal())}
      className="SwapSelectTokenModal"
      bodyStyle={{ boxShadow: 'none', backgroundColor: '#131118' }}
      width={464}
      closeIcon={<Close />}
    >
      <SwapSelectTokenModal setToken={setSwapFromToken} />
    </Modal>
  );
};
