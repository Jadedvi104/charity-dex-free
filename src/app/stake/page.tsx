import { Box, Typography } from '@mui/material';
import React from 'react';

const StakePage: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: "black", color: "white", minHeight: "100vh" }}>
      <Typography variant="h4" align="center" gutterBottom>
        STAKE
      </Typography>
    </Box>
  );
};

export default StakePage;