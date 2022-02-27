import { useSelector, useDispatch } from 'react-redux';
import { Modal } from 'antd';
import styled from 'styled-components';
import { TokenSelect } from './TokenSelect';
import { selectIsTokenSelectModalVisible } from '../selectors/Swap.selector';
import { closeTokenSelectModal } from '../actions/Swap.action';

const StyledSelectModal = styled(Modal)``;

export const TokenSelectModal = ({ setToken }) => {
  const isTokenSelectModalVisible = useSelector(
    selectIsTokenSelectModalVisible
  );
  const dispatch = useDispatch();
  
  return (
    <StyledSelectModal
      mask={true}
      width={464}
      onCancel={() => dispatch(closeTokenSelectModal())}
      visible={isTokenSelectModalVisible}
      maskStyle={{ backdropFilter: 'blur(8px)' }}
      modalRender={() => <TokenSelect setToken={setToken} />}
    ></StyledSelectModal>
  );
};
