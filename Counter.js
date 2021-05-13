import React from 'react';

function Counter(props) {
  return (
    <div className="count-div">
      <h1 className="count">{props.value}</h1>
    </div>
  )
}

export default Counter;