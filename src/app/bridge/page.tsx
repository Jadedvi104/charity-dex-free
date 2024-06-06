import { Box, Typography } from '@mui/material';
import React from 'react';

const BridgePage: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: "black", color: "white", minHeight: "100vh" }}>
      <Typography variant="h4" align="center" gutterBottom>
        BRIDGE
      </Typography>
    </Box>
  );
};

export default BridgePage;