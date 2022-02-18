import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from 'antd';
import { SwapSelectTokenModal } from './SwapSelectTokenModal';
import { ReactComponent as Close } from '../assets/close-small.svg';
import { selectIsSelectFromTokenModalOpen } from '../selectors/Swap.selector';
import {
  closeSelectFromTokenModal,
  setSwapFromToken,
} from '../actions/Swap.action';

export const SwapFromSelectTokenModal = () => {
  const isSelectIsSelectFromTokenModalOpen = useSelector(
    selectIsSelectFromTokenModalOpen
  );
  const dispatch = useDispatch();

  return (
    <Modal
      footer={null}
      visible={isSelectIsSelectFromTokenModalOpen}
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
