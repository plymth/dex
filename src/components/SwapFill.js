import { useSelector } from 'react-redux';
import {
  selectSwapFromToken,
  selectSwapToToken,
} from '../selectors/Swap.selector';
import styled from 'styled-components';
import { Card } from './Card';
import { StyledCard } from './Card';
import { SwapRow } from './SwapRow';
import { TokenSwitch } from './TokenSwitch';
import { SwapPrice } from './SwapPrice';
import { SwapInfo } from './SwapInfo';
import { Button } from './Button';
import { SWAP_FROM_LABEL, SWAP_TO_LABEL } from '../constants/Swap.constant';

const StyledSwapFill = styled.div`
  width: 464px;
  ${StyledCard} {
    margin-bottom: 24px;
  }
`;

export const SwapFill = (props) => {
  const swapFromToken = useSelector(selectSwapFromToken);
  const swapToToken = useSelector(selectSwapToToken);

  return (
    <StyledSwapFill>
      <Card title="Swap">
        <SwapRow
          label={SWAP_FROM_LABEL}
          token={swapFromToken}
          type="swapFrom"
          autoFocus
        />
        <TokenSwitch />
        <SwapRow autoFocus={false} label={SWAP_TO_LABEL} token={swapToToken} type="swapTo" />
        <SwapPrice />
        <Button title="Swap" />
      </Card>
      <SwapInfo />
    </StyledSwapFill>
  );
};
