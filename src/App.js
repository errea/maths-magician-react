/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import './App.css';
import Calculator from './components/calculator';
import './componentsStyles/calculatorStyles.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Calculator />
      </div>
    );
  }
}

export default App;
