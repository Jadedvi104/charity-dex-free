import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          ZOMEDEX
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Tabs value={0} aria-label="tabs">
            <Tab label="Tab 1" />
            <Tab label="Tab 2" />
            <Tab label="Tab 3" />
            <Tab label="Tab 4" />
            <Tab label="Tab 5" />
          </Tabs>
        </Box>
        <Button color="inherit">Button</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;