import { Row, Col } from 'antd';
import { useDispatch } from 'react-redux';
import { openTransactionSettingsModal } from '../actions/Swap.action';
import { SettingOutlined } from '@ant-design/icons/lib/icons';

export const SwapHeader = () => {
  const dispatch = useDispatch();
  return (
    <Row align="middle" justify="center">
      <Col span={24}>
        <SettingOutlined
          className="Swap__setting"
          onClick={() => dispatch(openTransactionSettingsModal())}
        />
        <div className="Swap__heading">Swap</div>
      </Col>
    </Row>
  );
};
