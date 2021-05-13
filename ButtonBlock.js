import React from 'react';

function ButtonBlock(props) {
  return (
    <div className="button-block">
      <button className="button" onClick={props.onClickMinus}>-</button>
      <button className="button" onClick={props.onClickPlus}>+</button>
    </div>
  )
}

export default ButtonBlock;