import { useSelector, useDispatch } from 'react-redux';
import { Modal } from 'antd';
import { SwapSelectTokenModal } from './SwapSelectTokenModal';
import { ReactComponent as Close } from '../assets/close-small.svg';
import { selectIsSelectToTokenModalOpen } from '../selectors/Swap.selector';
import {
  setSwapToToken,
  closeSelectToTokenModal,
} from '../actions/Swap.action';

export const SwapToSelectTokenModal = () => {
  const isSelectToTokenModalOpen = useSelector(selectIsSelectToTokenModalOpen);
  const dispatch = useDispatch();

  return (
    <Modal
      footer={null}
      visible={isSelectToTokenModalOpen}
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
