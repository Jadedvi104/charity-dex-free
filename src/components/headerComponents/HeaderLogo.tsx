import * as React from "react";
import Typography from "@mui/material/Typography";
import { Avatar, Box } from "@mui/material";
import Link from "next/link";

const HeaderLogo = () => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Avatar
        alt="Logo"
        src="/logo.svg" // Replace with the URL of your logo
        sx={{ marginRight: 2 }}
      />
      <Link href={'/'}>
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: "bold", fontSize: "1.5rem" }}
        >
          ZOMEDEX
        </Typography>
      </Link>
      
    </Box>
  );
};

export default HeaderLogo;
