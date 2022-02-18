import { useDispatch } from 'react-redux';
import { InputNumber } from 'antd';
import './SwapInput.css';

export const SwapInput = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="SwapInput">
      <div className="SwapInput__label">{props.label}</div>
      <div
        className={
          props.token && props.token.amount > 0
            ? 'SwapInput__amount--filled'
            : 'SwapInput__amount'
        }
      >
        <InputNumber
          autoFocus
          value={props.token ? props.token.amount : null}
          placeholder="0.00"
          type="number"
          bordered={false}
          controls={false}
          style={{ width: '100%' }}
          disabled={props.token ? false : true}
          autoFocus={props.autoFocus}
          onChange={(value) => dispatch(props.setTokenAmount(value))}
        />
      </div>
      <div className="SwapInput__balance">Balance: {props.balance}</div>
    </div>
  );
};
