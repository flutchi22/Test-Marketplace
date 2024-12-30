import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Menu from "../Menu/index.jsx";
import Footer from "../Footer/index.jsx";
import Header from "./Header.jsx";
import Cards from "./Cards.jsx";
const Mint = () => {
  return (
    <div>
      <Menu title="Home"/>
      <Container maxWidth="xl">
        <Header />
        <Cards />
      </Container>
      <Box
        sx={{
          paddingTop: "140px",
        }}
      >
        <Footer />
      </Box>
    </div>
  );
};

export default Mint;
