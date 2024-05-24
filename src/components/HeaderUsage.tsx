import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#000000" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          ZOMEDEX
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Tabs
            value={0}
            aria-label="tabs"
            TabIndicatorProps={{
              sx: { backgroundColor: "white" }, // Indicator color
            }}
          >
            <Tab
              label="Swap"
              sx={{
                color: 'white', // Default color
                '&.Mui-selected': {
                  color: 'green', // Selected tab color
                },
                "&:hover": {
                  backgroundColor: "#e0e0e0", // Change to your desired hover color
                  color: "#000", // Change to your desired text color on hover
                },
              }}
            />
            <Tab
              label="Pools"
              sx={{
                color: 'white', // Default color
                '&.Mui-selected': {
                  color: 'green', // Selected tab color
                },
                "&:hover": {
                  backgroundColor: "#e0e0e0", // Change to your desired hover color
                  color: "#000", // Change to your desired text color on hover
                },
              }}
            />
            <Tab
              label="Stake"
              sx={{
                color: 'white', // Default color
                '&.Mui-selected': {
                  color: 'green', // Selected tab color
                },
                "&:hover": {
                  backgroundColor: "#e0e0e0", // Change to your desired hover color
                  color: "#000", // Change to your desired text color on hover
                },
              }}
            />
            <Tab
              label="Bridge"
              sx={{
                color: 'white', // Default color
                '&.Mui-selected': {
                  color: 'green', // Selected tab color
                },
                "&:hover": {
                  backgroundColor: "#e0e0e0", // Change to your desired hover color
                  color: "#000", // Change to your desired text color on hover
                },
              }}
            />
            <Tab
              label="Buy Crypto"
              sx={{
                color: 'white', // Default color
                '&.Mui-selected': {
                  color: 'green', // Selected tab color
                },
                "&:hover": {
                  backgroundColor: "#e0e0e0", // Change to your desired hover color
                  color: "#000", // Change to your desired text color on hover
                },
              }}
            />
          </Tabs>
        </Box>
        <Button color="success">Connect</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
