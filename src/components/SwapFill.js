import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Card } from './Card';
import { StyledCard } from './Card';
import { SwapRow } from './SwapRow';
import { TokenSwitch } from './TokenSwitch';
import { SwapPrice } from './SwapPrice';
import { SwapInfo } from './SwapInfo';
import { Button } from './Button';
import {
  selectSwapFromToken,
  selectSwapToToken,
} from '../selectors/Swap.selector';
import { removeSwapFromToken, removeSwapToToken } from '../actions/Swap.action';

const StyledSwapFill = styled.div`
  width: 464px;
  ${StyledCard} {
    margin-bottom: 24px;
  }
`;

export const SwapFill = () => {
  const swapFromToken = useSelector(selectSwapFromToken);
  const swapToToken = useSelector(selectSwapToToken);

  return (
    <StyledSwapFill>
      <Card title="Swap">
        <SwapRow token={swapFromToken} onRemove={removeSwapFromToken} />
        <TokenSwitch />
        <SwapRow token={swapToToken} onRemove={removeSwapToToken} />
        <SwapPrice />
        <Button title="Swap" />
      </Card>
      <SwapInfo />
    </StyledSwapFill>
  );
};
