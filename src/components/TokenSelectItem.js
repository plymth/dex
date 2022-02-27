import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Row, Col } from 'antd';

const StyledTokenSelectItem = styled.div`
  color: #ffffff;
  background-color: #1c1924;
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 8px;
  cursor: pointer;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
`;

const Name = styled.div`
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
`;

const Price = styled.div`
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  text-align: right;
`;

export const TokenSelectItem = ({ token, setToken }) => {
  const dispatch = useDispatch();

  return (
    <StyledTokenSelectItem onClick={() => console.log(setToken)}>
      <Row align="middle">
        <Col span={4}>
          <Icon src={token.icon} />
        </Col>
        <Col span={10}>
          <Name>{token.name}</Name>
        </Col>
        <Col span={10}>
          <Price></Price>
        </Col>
      </Row>
    </StyledTokenSelectItem>
  );
};
