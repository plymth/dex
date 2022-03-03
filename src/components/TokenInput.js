import { useDispatch } from 'react-redux';
import { setTokenAmount } from '../actions/Swap.action';
import styled from 'styled-components';

const StyledTokenInput = styled.div``;

const Label = styled.label`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  color: #ffffff;
  display: inline-block;
  margin-bottom: 4px;
`;

const Input = styled.input`
  font-size: 34px;
  font-weight: 700;
  color: #ffffff;
  line-height: 42px;
  border: none;
  outline: none;
  display: block;
  background-color: #131118;
  width: 100%;
  ::placeholder {
    color: #a6a0bb;
  }
`;

const Balance = styled.label`
  color: #a6a0bb;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  display: inline-block;
  margin-top: 4px;
`;

export const TokenInput = ({ token, label, type, autoFocus }) => {
  const dispatch = useDispatch();

  return (
    <StyledTokenInput>
      <Label>{label}</Label>
      <Input
        value={token ? token.amount : ''}
        placeholder="0.0"
        onChange={(e) => dispatch(setTokenAmount(e.target.value, type))}
      />
      <Balance>Balance: 70.42</Balance>
    </StyledTokenInput>
  );
};
