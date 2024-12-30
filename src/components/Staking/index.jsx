import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Menu from "../Menu/index.jsx";
import Footer from "../Footer/index.jsx";
import Header from "./Header.jsx";

const Staking = () => {
  return (
    <div>
      <Menu title="Home" />
      <Container maxWidth="xl">
        <Header />
      </Container>
      <Box
        sx={{
          paddingY: "40px",
        }}
      >
        <Footer />
      </Box>
    </div>
  );
};

export default Staking;
