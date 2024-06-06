"use client";

import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";

const SwapPage: React.FC = () => {
  const [fromToken, setFromToken] = useState("");
  const [toToken, setToToken] = useState("");
  const [amount, setAmount] = useState("");

  const handleSwap = () => {
    // Swap logic here
    console.log(`Swapping ${amount} of ${fromToken} to ${toToken}`);
  };

  return (
    <Box sx={{ backgroundColor: 'black', color: 'white', minHeight: '100vh' }}>
      <Container maxWidth="sm">
        <Box
          sx={{
            p: 4,
            borderRadius: 2,
            boxShadow: 3,
            backgroundColor: "white.paper",
          }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            Swap
          </Typography>
          <FormControl fullWidth margin="normal">
            <InputLabel>From</InputLabel>
            <Select
              value={fromToken}
              onChange={(e) => setFromToken(e.target.value)}
            >
              <MenuItem value="ETH">ETH</MenuItem>
              <MenuItem value="DAI">DAI</MenuItem>
              <MenuItem value="USDC">USDC</MenuItem>
              {/* Add more tokens as needed */}
            </Select>
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel>To</InputLabel>
            <Select
              value={toToken}
              onChange={(e) => setToToken(e.target.value)}
            >
              <MenuItem value="ETH">ETH</MenuItem>
              <MenuItem value="DAI">DAI</MenuItem>
              <MenuItem value="USDC">USDC</MenuItem>
              {/* Add more tokens as needed */}
            </Select>
          </FormControl>
          <TextField
            fullWidth
            margin="normal"
            label="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleSwap}
            sx={{ mt: 2 }}
          >
            Swap
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default SwapPage;
