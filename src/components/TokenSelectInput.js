import styled from 'styled-components';
import { Row, Col } from 'antd';
import { ReactComponent as Caret } from '../assets/caret.svg';
import { ReactComponent as Close } from '../assets/close-circle.svg';

const StyledTokenSelectInput = styled.div`
  float: right;
`;

const Token = styled.div`
  width: 40px;
  height: 40px;
  background: #413b54;
  border-radius: 20px;
  margin-right: 8px;
  cursor: pointer;
`;

const Symbol = styled.div`
  color: #ffffff;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  margin-right: 8px;
  cursor: pointer;
`;

const StyledCaret = styled(Caret)`
  display: block;
  cursor: pointer;
`;

const StyledClose = styled(Close)`
  display: block;
  margin-right: 16px;
  cursor: pointer;
`;

export const TokenSelectInput = () => {
  return (
    <StyledTokenSelectInput>
      <Row align="middle">
        <Col>
          <StyledClose />
        </Col>
        <Col>
          <Token />
        </Col>
        <Col>
          <Symbol>ETH</Symbol>
        </Col>
        <Col>
          <StyledCaret />
        </Col>
      </Row>
    </StyledTokenSelectInput>
  );
};
