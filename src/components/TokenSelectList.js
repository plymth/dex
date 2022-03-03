import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { TokenSelectItem } from './TokenSelectItem';
import { selectTokens } from '../selectors/Swap.selector';

const StyledTokenSelectList = styled.div`
  height: 580px;
  overflow-y: ${({ tokens }) => (tokens.length > 7 ? 'scroll' : 'visible')};
  padding-right: ${({ tokens }) => (tokens.length > 7 ? '10px' : '0')};
  ::-webkit-scrollbar {
    width: 4px;
  }
  ::-webkit-scrollbar-track {
    background-color: #131118;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #7a7099;
    border-radius: 10px;
  }
`;

export const TokenSelectList = ({ type, onCancel }) => {
  const tokens = useSelector(selectTokens);

  return (
    <StyledTokenSelectList tokens={tokens}>
      {tokens.map((token, index) => (
        <TokenSelectItem
          token={token}
          onCancel={onCancel}
          type={type}
          key={index}
        ></TokenSelectItem>
      ))}
    </StyledTokenSelectList>
  );
};
