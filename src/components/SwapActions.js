import { Row, Col } from 'antd';
import Button from '../common/Button';
import { selectCanSwapToken } from '../features/swap/swapSlice';
import { useSelector } from 'react-redux';

export const SwapActions = () => {
  const canSwapToken = useSelector(selectCanSwapToken);
  
  return (
    <Row style={{ paddingTop: '30px' }}>
      {!canSwapToken && (
        <Col span={24}>
          <Button label="Enter an Amount" type="disabled" icon={false} />
        </Col>
      )}
      {canSwapToken && (
        <Col span={24}>
          <Button label="Swap" type="full" icon={false} />
        </Col>
      )}
    </Row>
  );
};
