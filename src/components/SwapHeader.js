import { Row, Col } from 'antd';
import { SettingOutlined } from '@ant-design/icons/lib/icons';

export const SwapHeader = () => {
  return (
    <Row align="middle" justify="center">
      <Col span={24}>
        <SettingOutlined className="Swap__setting" />
        <div className="Swap__heading">Swap</div>
      </Col>
    </Row>
  );
};
