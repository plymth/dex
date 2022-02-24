import styled from 'styled-components';

const StyledSwapEstimate= styled.div`
  font-size: 16px;
  line-height: 24px;
  font-style: italic;
  color: #a6a0bb;
`;

export const SwapEstimate = () => {
  return (
    <StyledSwapEstimate>
      Output is estimated. You will received at least 938.5 AMPL or the
      transaction will revert.
    </StyledSwapEstimate>
  );
};
