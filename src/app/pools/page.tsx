import { Box, Typography } from "@mui/material";
import React from "react";

const PoolsPage: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: "black", color: "white", minHeight: "100vh" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Pools
      </Typography>
    </Box>
  );
};

export default PoolsPage;
