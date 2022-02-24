import styled from 'styled-components';
import { Divider } from 'antd';
import { ReactComponent as Switch } from '../assets/switch.svg';

const StyledTokenSwitch = styled.div``;

const StyledSwitch = styled(Switch)`
  cursor: pointer;
`;

export const TokenSwitch = (props) => {
  return (
    <StyledTokenSwitch>
      <Divider style={{ borderColor: '#1c1924' }} orientation="right">
        <StyledSwitch />
      </Divider>
    </StyledTokenSwitch>
  );
};
