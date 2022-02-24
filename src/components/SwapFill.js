import styled from 'styled-components';
import { Card } from './Card';
import { StyledCard } from './Card';
import { SwapRow } from './SwapRow';
import { TokenSwitch } from './TokenSwitch';
import { SwapPrice } from './SwapPrice';
import { SwapInfo } from './SwapInfo';
import { Button } from './Button';

const StyledSwapFill = styled.div`
  width: 464px;
  ${StyledCard} {
    margin-bottom: 24px;
  }
`;

export const SwapFill = () => {
  return (
    <StyledSwapFill>
      <Card title="Swap">
        <SwapRow />
        <TokenSwitch />
        <SwapRow />
        <SwapPrice />
        <Button title="Swap" />
      </Card>
      <SwapInfo />
    </StyledSwapFill>
  );
};
