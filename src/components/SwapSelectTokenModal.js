import { useDispatch } from 'react-redux';
import { Row, Col } from 'antd';
import { ReactComponent as Search } from '../assets/search.svg';
import { SwapSelectTokenModalRow } from './SwapSelectTokenModalRow';
import { useSelector } from 'react-redux';
import { selectTokenSearch, selectTokens } from '../selectors/Swap.selector';
import { setTokenSearch } from '../actions/Swap.action';
import './SwapSelectTokenModal.css';

export const SwapSelectTokenModal = (props) => {
  const tokenSearch = useSelector(selectTokenSearch);
  const tokens = useSelector(selectTokens);
  const dispatch = useDispatch();

  const getContentClass = () => {
    return tokens.length > 7
      ? 'SwapSelectTokenModal__content--full'
      : 'SwapSelectTokenModal__content';
  };

  return (
    <div className="SwapSelectTokenModal">
      <Row justify="center">
        <Col span={24}>
          <div className="SwapSelectTokenModal__title">Select a Token</div>
        </Col>
      </Row>
      <Row align="middle" className="SwapSelectTokenModal__input">
        <Col span={20}>
          <input
            type="text"
            value={tokenSearch}
            placeholder="Search name or paste address"
            onChange={(e) => dispatch(setTokenSearch(e.target.value))}
            autoFocus={true}
          />
        </Col>
        <Col span={4}>
          <Search className="SwapSelectTokenModal__search-icon" />
        </Col>
      </Row>
      <div className={getContentClass()}>
        {tokens.map((token, index) => (
          <SwapSelectTokenModalRow
            setToken={props.setToken}
            token={token}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
