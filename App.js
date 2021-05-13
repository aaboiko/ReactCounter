import React from 'react';
import './index.css';
import Counter from './Counter.js';
import ButtonBlock from './ButtonBlock.js';
import {increment, decrement} from './countReducer';
import {useDispatch, useSelector} from 'react-redux';

function App() {

  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);

  return (
    <div className="container">
      <Counter value={count} />
      <ButtonBlock onClickMinus={() => dispatch(decrement())} onClickPlus={() => dispatch(increment())} />
    </div>
  )

}

export default App;