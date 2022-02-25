import styled from 'styled-components';
import { ReactComponent as Search } from '../assets/search.svg';
import { Row, Col } from 'antd';

const StyledTokenSelect = styled.div`
  width: 464px;
  height: 772px;
  border-radius: 8px;
  background-color: #131118;
  padding: 24px;
`;

const Title = styled.div`
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  text-align: center;
  margin-bottom: 24px;
`;

const TokenSearch = styled.div`
  background-color: #1c1924;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 24px;
`;

const TokenSearchInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background-color: #1c1924;
  font-size: 16px;
  border-radius: 8px;
`;

const StyledSearch = styled(Search)`
  float: right;
`;

export const TokenSelect = () => {
  return (
    <StyledTokenSelect>
      <Row align="middle" justify="center">
        <Col span={24}>
          <Title>Select a Token</Title>
        </Col>
      </Row>
      <TokenSearch>
        <Row>
          <Col span={20}>
            <TokenSearchInput
              placeholder="Search name or paste address"
              autoFocus
            />
          </Col>
          <Col span={4}>
            <StyledSearch />
          </Col>
        </Row>
      </TokenSearch>
    </StyledTokenSelect>
  );
};
