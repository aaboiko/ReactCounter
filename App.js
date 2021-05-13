import React from 'react';
import './index.css';
import Counter from './Counter.js';
import ButtonBlock from './ButtonBlock.js';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }

  return (
    <div className="container">
      <Counter value={count} />
      <ButtonBlock onClickMinus={decrement} onClickPlus={increment} />
    </div>
  )
}

export default App;