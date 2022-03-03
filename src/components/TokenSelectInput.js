import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import { ReactComponent as Caret } from '../assets/caret.svg';
import { ReactComponent as Close } from '../assets/close-circle.svg';
import { removeToken } from '../actions/Swap.action';

const StyledTokenSelectInput = styled.div`
  float: right;
`;

const Token = styled.img`
  width: 40px;
  height: 40px;
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

export const TokenSelectInput = ({ token, onClick, type }) => {
  const dispatch = useDispatch();
  return (
    <>
      <StyledTokenSelectInput>
        <Row align="middle">
          <Col>
            <StyledClose onClick={() => dispatch(removeToken(type))} />
          </Col>
          <Col>
            <Token src={token.icon} onClick={() => onClick()} />
          </Col>
          <Col>
            <Symbol onClick={() => onClick()}>{token.symbol}</Symbol>
          </Col>
          <Col>
            <StyledCaret onClick={() => onClick()} />
          </Col>
        </Row>
      </StyledTokenSelectInput>
    </>
  );
};
