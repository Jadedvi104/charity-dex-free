import * as React from "react";
import Typography from "@mui/material/Typography";
import { Avatar, Box } from "@mui/material";

const HeaderLogo = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Avatar
        alt="Logo"
        src="/logo.svg" // Replace with the URL of your logo
        sx={{ marginRight: 2 }}
      />
      <Typography
        variant="h6"
        component="div"
        sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
      >
        ZOMEDEX
      </Typography>
    </Box>
  );
};

export default HeaderLogo;
