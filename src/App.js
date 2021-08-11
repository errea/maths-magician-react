/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './App.css';
import Calculator from './components/calculator';
import './componentsStyles/calculatorStyles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}

export default App;
