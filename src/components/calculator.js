import React from 'react';
import Button from './button-component';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: 0,
    };
  }

  render() {
    const { result } = this.state;
    return (
      <div className="calculator">
        <div className="resultShow">
          <p className="resultNumber">{result}</p>
        </div>
        <Button />
      </div>
    );
  }
}

export default Calculator;
