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
import {
  removeSwapFromToken,
  removeSwapToToken,
  setSwapFromToken,
  setSwapToToken,
} from '../actions/Swap.action';
import { SWAP_FROM_LABEL, SWAP_TO_LABEL } from '../constants/Swap.constant';

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
        <SwapRow
          token={swapFromToken}
          label={SWAP_FROM_LABEL}
          removeToken={removeSwapFromToken}
          setToken={setSwapFromToken}
        />
        <TokenSwitch />
        <SwapRow
          token={swapToToken}
          label={SWAP_TO_LABEL}
          removeToken={removeSwapToToken}
          setToken={setSwapToToken}
        />
        <SwapPrice />
        <Button title="Swap" />
      </Card>
      <SwapInfo />
    </StyledSwapFill>
  );
};
