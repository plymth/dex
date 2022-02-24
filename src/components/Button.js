import styled from 'styled-components';
import { Row, Col } from 'antd';
import { ReactComponent as Caret } from '../assets/caret.svg';

const StyledButton = styled.button`
  border: none;
  display: block;
  width: ${({ fixed }) => (fixed ? '183px' : '100%')};
  float: ${({ fixed }) => (fixed ? 'right' : 'none')};
  outline: none;
  font-size: 16px;
  font-weight: 700;
  color: #ffffff;
  padding: 12px 16px;
  border-radius: 100px;
  text-align: center;
  cursor: pointer;
  background: linear-gradient(
    73.6deg,
    #85ffc4 2.11%,
    #5cc6ff 42.39%,
    #bc85ff 85.72%
  );
`;

const Title = styled.div``;

const StyledCaret = styled(Caret)`
  display: block;
  float: left;
  margin-top: 4px;
`;

export const Button = ({ title, fixed }) => {
  return (
    <StyledButton fixed={fixed}>
      {!fixed && (
        <Row>
          <Col span={24}>
            <Title>{title}</Title>
          </Col>
        </Row>
      )}
      {fixed && (
        <Row align="middle">
          <Col span={20}>
            <Title>{title}</Title>
          </Col>
          <Col span={4}>
            <StyledCaret />
          </Col>
        </Row>
      )}
    </StyledButton>
  );
};
