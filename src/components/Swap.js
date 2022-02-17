import { useSelector } from 'react-redux';
import { Row, Col } from 'antd';
import { SettingOutlined } from '@ant-design/icons/lib/icons';
import { SwapActions } from './SwapActions';
import { SwapFromInput } from './SwapFromInput';
import { SwapToInput } from './SwapToInput';
import { SwapFromSelectTokenModal } from './SwapFromSelectTokenModal';
import { SwapToSelectTokenModal } from './SwapToSelectTokenModal';
import {
  selectSwapFromToken,
  selectSwapToToken,
} from '../features/swap/swapSlice';
import { SwapDivider } from './SwapDivider';
import './Swap.css';

export const Swap = () => {
  const swapFromToken = useSelector(selectSwapFromToken);
  const swapToToken = useSelector(selectSwapToToken);

  return (
    <div className="Swap">
      <Row align="middle" justify="center">
        <Col span={24}>
          <SettingOutlined className="Swap__setting" />
          <div className="Swap__heading">Swap</div>
        </Col>
      </Row>
      <SwapFromInput token={swapFromToken} />
      <SwapDivider />
      <SwapToInput token={swapToToken} />
      <SwapActions />
      <SwapFromSelectTokenModal />
      <SwapToSelectTokenModal />
    </div>
  );
};
