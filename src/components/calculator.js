/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import Button from './buttons';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Button />
    );
  }
}

export default Calculator;
