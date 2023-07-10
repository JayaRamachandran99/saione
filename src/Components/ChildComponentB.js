import React from 'react';

const ChildComponentB = (props) => {
  const { name } = props;

  return (
    <div>
      <h2>I am two, {name}!</h2>
    </div>
  );
};

export default ChildComponentB;
