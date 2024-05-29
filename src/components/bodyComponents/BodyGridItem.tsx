// GridItem.tsx
import React from "react";
import { GridItem as GridItemType } from "@/types/types";
import { Box, Typography } from "@mui/material";

interface GridItemProps {
  item: GridItemType;
}

const GridItem: React.FC<GridItemProps> = ({ item }) => {
  switch (item.type) {
    case "text":
      return (
        <Box
          sx={{
            mt: 8,
            height: 200,
            backgroundColor: "#000000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          p={2}
        >
          <Typography
            variant="h5"
            component="div"
            sx={{
              fontSize: "5rem",
              fontWeight: "bold",
              fontFamily: "sans-serif",
              color: "#C2F2EF",
            }}
          >
            {item.content}
          </Typography>
        </Box>
      );
    case "image":
      return (
        <Box p={2}>
          <img src={item.src} alt={item.alt} style={{ maxWidth: "100%" }} />
        </Box>
      );
    default:
      return null;
  }
};

export default GridItem;
