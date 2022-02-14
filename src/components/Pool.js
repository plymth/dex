import React, { Component } from 'react';
import './Pool.css';

export class Pool extends Component {
  render() {
    return (
      <div className="Pool">
        <h4>Liquidity provider rewards</h4>
        <p>
          Liquidity providers earn a 0.3% fee on all trades proportional to
          their share of the pool. Fees are added to the pool, accrue in real
          time and can be claimed by withdrawing your liquidity.
        </p>
        <p>
          <a href="">Read more about providing liquidity</a>
        </p>
      </div>
    );
  }
}

export default Pool;
