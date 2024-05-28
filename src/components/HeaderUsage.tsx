import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import HeaderTabs from "./headerComponents/HeaderTabs";
import HeaderLogo from "./headerComponents/HeaderLogo";
import HeaderButton from "./headerComponents/HeaderButton";

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#000000" }}>
      <Toolbar>
        <HeaderLogo/>
        <HeaderTabs/>
        <HeaderButton/>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
