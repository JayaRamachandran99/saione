import React from 'react';
import ChildComponentA from './ChildComponentA';
import ChildComponentB from './ChildComponentB';

const ParentComponent = () => {
  const name = 'John Doe';

  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div>
      <ChildComponentA name={name} onClick={handleClick} />
      <ChildComponentB name={name} />
    </div>
  );
};

export default ParentComponent;
