import React from 'react';

const ChildComponentA = (props) => {
  const { name, onClick } = props;

  return (
    <div>
      <h2>I am one, {name}!</h2>
      <button onClick={onClick}>Click Mee</button>
    </div>
  );
};

export default ChildComponentA;
