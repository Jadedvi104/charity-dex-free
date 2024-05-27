import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Image from "next/image";

const BodyBanner = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: 0,
        paddingBottom: "56.25%", // 16:9 ratio
        backgroundColor: "#000000", // Placeholder color for banner
        marginBottom: 4,
      }}
    >
      {/* Add your banner content/image here */}
      <Image
        src="/banner.svg"
        alt="banner.js Logo"
        width={1080}
        height={768}
        priority
      />
    </Box>
  );
};

export default BodyBanner;
