import React from 'react';
import './index.css';
import Counter from './Counter.js';
import ButtonBlock from './ButtonBlock.js';
import { INCREMENT, DECREMENT } from './countReducer';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const dispatch = useDispatch();
  const count = useSelector((state) => state);

  return (
    <div className="container">
      <Counter value={count} />
      <ButtonBlock onClickMinus={() => dispatch(DECREMENT())} onClickPlus={() => dispatch(INCREMENT())} />
    </div>
  )

}

export default App;