import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { SettingOutlined } from '@ant-design/icons/lib/icons';
import { TransactionSettingsModal } from './TransactionSettingsModal';
import { openTransactionSettingsModal } from '../actions/Swap.action';

const StyledSwapSettings = styled.div``;

const StyledSettingOutlined = styled(SettingOutlined)`
  color: #ffffff;
  font-size: 24px;
  cursor: pointer;
  float: right;
`;

export const SwapSettings = () => {
  const dispatch = useDispatch();

  return (
    <>
      <StyledSwapSettings
        onClick={() => dispatch(openTransactionSettingsModal())}
      >
        <StyledSettingOutlined />
      </StyledSwapSettings>
      <TransactionSettingsModal />
    </>
  );
};
