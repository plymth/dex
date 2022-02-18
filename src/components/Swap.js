import { useSelector } from 'react-redux';
import { SwapHeader } from './SwapHeader';
import { SwapFromInput } from './SwapFromInput';
import { SwapDivider } from './SwapDivider';
import { SwapToInput } from './SwapToInput';
import { SwapPrice } from './SwapPrice';
import { SwapActions } from './SwapActions';
import { SwapFromSelectTokenModal } from './SwapFromSelectTokenModal';
import { SwapToSelectTokenModal } from './SwapToSelectTokenModal';
import { TransactionSettingsModal } from './TransactionSettingsModal';
import { SwapData } from './SwapData';
import {
  selectSwapFromToken,
  selectSwapToToken,
} from '../selectors/Swap.selector';
import './Swap.css';

export const Swap = () => {
  const swapFromToken = useSelector(selectSwapFromToken);
  const swapToToken = useSelector(selectSwapToToken);

  return (
    <div className="Swap">
      <div className="Swap__wrapper">
        <SwapHeader />
        <SwapFromInput token={swapFromToken} autoFocus={true} />
        <SwapDivider />
        <SwapToInput token={swapToToken} />
        <SwapPrice />
        <SwapActions />
        <SwapFromSelectTokenModal />
        <SwapToSelectTokenModal />
        <TransactionSettingsModal />
      </div>
      <SwapData />
    </div>
  );
};
