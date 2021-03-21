import React from 'react';
import Button from '@material-ui/core/Button';

const TButton = (props) => {
  const { color, children, ...rest } = props;
  return (
    <Button variant='contained' color={color} {...rest}>
      {children}
    </Button>
  );
};

export default TButton;
