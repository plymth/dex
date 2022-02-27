import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { ReactComponent as Search } from '../assets/search.svg';
import { ReactComponent as Close } from '../assets/close-small.svg';
import { Row, Col } from 'antd';
import { selectTokenSearch } from '../selectors/Swap.selector';
import { closeTokenSelectModal, setTokenSearch } from '../actions/Swap.action';
import { TokenSelectList } from './TokenSelectList';

const StyledTokenSelect = styled.div`
  width: auto;
  height: auto;
  border-radius: 8px;
  background-color: #131118;
  padding: 24px;
  pointer-events: auto;
`;

const Title = styled.div`
  color: #ffffff;
  font-size: 20px;
  font-weight: 700;
  text-align: center;
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
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  color: #ffffff;
  background-color: #1c1924;
  border-radius: 8px;
`;

const StyledSearch = styled(Search)`
  float: right;
`;

const StyledClose = styled(Close)`
  float: right;
  display: block;
  cursor: pointer;
`;

const Spacer = styled.div`
  height: 24px;
`;

export const TokenSelect = ({ setToken }) => {
  const tokenSearch = useSelector(selectTokenSearch);
  const dispatch = useDispatch();

  return (
    <StyledTokenSelect>
      <Row align="middle">
        <Col span={2}></Col>
        <Col span={20}>
          <Title>Select a Token</Title>
        </Col>
        <Col span={2}>
          <StyledClose onClick={() => dispatch(closeTokenSelectModal())} />
        </Col>
      </Row>
      <Spacer />
      <TokenSearch>
        <Row>
          <Col span={20}>
            <TokenSearchInput
              placeholder="Search name or paste address"
              value={tokenSearch}
              onChange={(e) => dispatch(setTokenSearch(e.target.value))}
              autoFocus
            />
          </Col>
          <Col span={4}>
            <StyledSearch />
          </Col>
        </Row>
      </TokenSearch>
      <TokenSelectList setToken={setToken} />
    </StyledTokenSelect>
  );
};
