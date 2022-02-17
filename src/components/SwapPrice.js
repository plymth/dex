import { Row, Col } from 'antd';
import { ReactComponent as Exchange } from '../assets/exchange.svg';
import './SwapPrice.css';

export const SwapPrice = () => {
  return (
    <div className="SwapPrice">
      <Row align="middle">
        <Col span={4}>
          <div className="SwapPrice__label">Price</div>
        </Col>
        <Col span={18}>
          <div className="SwapPrice__amount">0.002167 ETH per 1INCH</div>
        </Col>
        <Col span={2}>
          <Exchange className="SwapPrice__exchange" />
        </Col>
      </Row>
    </div>
  );
};
