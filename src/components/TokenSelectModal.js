import { Modal } from 'antd';
import styled from 'styled-components';
import { TokenSelect } from './TokenSelect';

const StyledSelectModal = styled(Modal)``;

export const TokenSelectModal = ({ type, visible, onCancel }) => {
  return (
    <StyledSelectModal
      onCancel={() => onCancel()}
      mask={true}
      width={464}
      visible={visible}
      maskStyle={{ backdropFilter: 'blur(8px)' }}
      modalRender={() => <TokenSelect type={type} onCancel={onCancel} />}
    ></StyledSelectModal>
  );
};
