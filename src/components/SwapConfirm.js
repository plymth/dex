import { Card } from './Card';
import { SwapRow } from './SwapRow';
import { SwapEstimate } from './SwapEstimate';
import { SwapPrice } from './SwapPrice';
import { SwapInfo } from './SwapInfo';
import { Button } from './Button';

export const SwapConfirm = () => {
  return (
    <Card title="Confirm Swap" nav>
      <SwapRow readOnly />
      <SwapRow readOnly />
      <SwapEstimate />
      <SwapPrice />
      <SwapInfo />
      <Button title="Confirm Swap" />
    </Card>
  );
};
