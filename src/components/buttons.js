import React, { useState } from 'react';
import calculate from '../logic/calculate';
import style from './CalculatorGrid.module.css';

const Button = () => {
  const [total, setTotal] = useState('');
  const [next, setNext] = useState('');
  const [operation, setOperation] = useState('');
  const obj = {
    total,
    next,
    operation,
  };

  const handleStateChange = (newState) => {
    if (newState.total != null) {
      setTotal(newState.total);
    }

    setNext(newState.next);

    if (newState.operation != null) {
      setOperation(newState.operation);
    }
  };

  return (
    <div className={style.calculator_container}>
      <div className={style.resultShow_container}>
        <p className={style.resultNumber_display}>
          { total }
          { ' ' }
          { operation }
          { ' ' }
          { next }
        </p>
      </div>
      <button className={`${style.number0} ${style.numbers}`} type="button" onClick={() => { handleStateChange(calculate(obj, '0')); }}>0</button>
      <button className={`${style.number1} ${style.numbers}`} type="button" onClick={() => { handleStateChange(calculate(obj, '1')); }}>1</button>
      <button className={`${style.number2} ${style.numbers}`} type="button" onClick={() => { handleStateChange(calculate(obj, '2')); }}>2</button>
      <button className={`${style.number3} ${style.numbers}`} type="button" onClick={() => { handleStateChange(calculate(obj, '3')); }}>3</button>
      <button className={`${style.number4} ${style.numbers}`} type="button" onClick={() => { handleStateChange(calculate(obj, '4')); }}>4</button>
      <button className={`${style.number5} ${style.numbers}`} type="button" onClick={() => { handleStateChange(calculate(obj, '5')); }}>5</button>
      <button className={`${style.number6} ${style.numbers}`} type="button" onClick={() => { handleStateChange(calculate(obj, '6')); }}>6</button>
      <button className={`${style.number7} ${style.numbers}`} type="button" onClick={() => { handleStateChange(calculate(obj, '7')); }}>7</button>
      <button className={`${style.number8} ${style.numbers}`} type="button" onClick={() => { handleStateChange(calculate(obj, '8')); }}>8</button>
      <button className={`${style.number9} ${style.numbers}`} type="button" onClick={() => { handleStateChange(calculate(obj, '9')); }}>9</button>
      <button className={`${style.buttonAc} ${style.symbols}`} type="button" onClick={() => { handleStateChange(calculate(obj, 'AC')); }}>AC</button>
      <button className={`${style.plusminus} ${style.symbols}`} type="button" onClick={() => { handleStateChange(calculate(obj, '+/-')); }}>+/-</button>
      <button className={`${style.percentage} ${style.symbols}`} type="button" onClick={() => { handleStateChange(calculate(obj, '%')); }}>%</button>
      <button className={`${style.plus} ${style.symbols}`} type="button" onClick={() => { handleStateChange(calculate(obj, '+')); }}>+</button>
      <button className={`${style.minus} ${style.symbols}`} type="button" onClick={() => { handleStateChange(calculate(obj, '-')); }}>-</button>
      <button className={`${style.divide} ${style.symbols}`} type="button" onClick={() => { handleStateChange(calculate(obj, '÷')); }}>÷</button>
      <button className={`${style.multiply} ${style.symbols}`} type="button" onClick={() => { handleStateChange(calculate(obj, 'x')); }}>x</button>
      <button className={`${style.dot} ${style.symbols}`} type="button" onClick={() => { handleStateChange(calculate(obj, '.')); }}>.</button>
      <button className={`${style.equal} ${style.symbols}`} type="button" onClick={() => { handleStateChange(calculate(obj, '=')); }}>=</button>
    </div>
  );
};

export default Button;
