import React from 'react';
import Button from '@mui/material/Button';

const HeaderButton = () => {
  return (
    <Button
      sx={{
        backgroundColor: '#5B9F80',
        color: 'white',
        fontWeight: 'bold',
        '&:hover': {
          backgroundColor: '#4e8a6d', // Slightly darker shade for hover effect
        },
      }}
    >
      Connect Wallet
    </Button>
  );
};

export default HeaderButton;