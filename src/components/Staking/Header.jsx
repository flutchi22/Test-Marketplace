import React from "react";
import Box from "@mui/material/Box";
import Tabs from "../Tabs/Tabs.jsx";
import Tab from "../Tabs/Tab.jsx";
import Stake from "./Stake.jsx";
import UnStake from "./UnStake.jsx";

const Header = () => {
  return (
    <Box
      sx={{
        paddingY: "40px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          "@media (max-width: 520px)": {
            flexDirection: "column",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignSelf: "center",
            "@media (max-width: 520px)": {
              marginBottom: "30px",
            },
          }}
        >
          <Tabs >
            <Tab label={`STAKED - 6`}>
              <Stake />
            </Tab>
            <Tab label={`UNSTAKED - 0`}>
              <UnStake />
            </Tab>
          </Tabs>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
