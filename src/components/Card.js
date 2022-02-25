import styled from 'styled-components';
import { Row, Col } from 'antd';
import { SwapSettings } from './SwapSettings';
import { ReactComponent as BackButton } from '../assets/arrow-left-back.svg';

export const StyledCard = styled.div`
  width: 464px;
  border-radius: 8px;
  background: #131118;
  padding: 24px;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  text-align: center;
  color: #ffffff;
`;

const Header = styled.div`
  margin-bottom: 24px;
`;

const StyledBackButton = styled(BackButton)`
  float: left;
  cursor: pointer;
`;

export const Card = ({ nav, title, children }) => {
  return (
    <StyledCard>
      <Header>
        <Row align="middle">
          <Col span={2}>{nav && <StyledBackButton />}</Col>
          <Col span={20}>
            <Title>{title}</Title>
          </Col>
          <Col span={2}>
            <SwapSettings />
          </Col>
        </Row>
      </Header>
      {children}
    </StyledCard>
  );
};
