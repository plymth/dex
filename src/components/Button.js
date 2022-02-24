import styled from 'styled-components';

const StyledButton = styled.button`
  border: none;
  display: block;
  width: 100%;
  outline: none;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  color: #ffffff;
  height: 48px;
  border-radius: 100px;
  cursor: pointer;
  background: linear-gradient(
    73.6deg,
    #85ffc4 2.11%,
    #5cc6ff 42.39%,
    #bc85ff 85.72%
  );
`;

export const Button = (props) => {
  return <StyledButton>{props.title}</StyledButton>;
};
