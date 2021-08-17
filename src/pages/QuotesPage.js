import React, { useState } from 'react';
import style from './QuotesPage.module.css';

const QuotesPage = () => {
  const [quote, setQuote] = useState('Mathematics is not about numbers, equations computations or algorithms:, It is about understanding.');
  const [author, setAuthor] = useState('William Paul Thurston, German theoretical physicist');
  const changeQuote = async () => {
    const response = await fetch('https://random-math-quote-api.herokuapp.com');
    const result = await response.json();
    const data = await result;
    setQuote(data.quote);
    setAuthor(data.author);
  };

  return (
    <div className={style.div}>
      <h2>
        <p className={style.quote}>
          { quote }
        </p>
        <p>
          -
          {' '}
          {author}
        </p>
      </h2>
      <button className={style.button} type="button" onClick={() => { changeQuote(); }}>New Quote</button>
    </div>
  );
};

export default QuotesPage;