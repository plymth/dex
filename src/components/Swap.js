import { useSelector } from 'react-redux';
import { SwapFill } from './SwapFill';
import { SwapConfirm } from './SwapConfirm';
import { selectIsSwapConfirmVisible } from '../selectors/Swap.selector';

export const Swap = () => {
  const isSwapConfirmVisible = useSelector(selectIsSwapConfirmVisible);

  return (
    <>
      {!isSwapConfirmVisible && <SwapFill />}
      {isSwapConfirmVisible && <SwapConfirm />}
    </>
  );
};
