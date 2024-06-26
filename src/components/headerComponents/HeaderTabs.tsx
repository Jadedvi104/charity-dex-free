"use client";

import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Box } from "@mui/material";
import { tabLabels } from "@/Data/tabsItems";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const tabStyles = {
  color: "white", // Default color
  "&.Mui-selected": {
    color: "#5B9F80", // Selected tab color
  },
  "&:hover": {
    backgroundColor: "#e0e0e0", // Hover background color
    color: "#000", // Hover text color
  },
};

const HeaderTabs = () => {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
    router.push(tabLabels[newValue].href);
  };

  return (
    <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
      <Tabs
        value={selectedTab}
        onChange={handleChange}
        aria-label="tabs"
        TabIndicatorProps={{
          sx: { backgroundColor: "white" }, // Indicator color
        }}
      >
        {tabLabels.map((tab) => (
            <Tab 
              key={tab.href}
              label={tab.label}
              sx={tabStyles} 
            />
        ))}
      </Tabs>
    </Box>
  );
};

export default HeaderTabs;
