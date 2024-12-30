import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Social from "../Social/index.jsx";
import Welcome from "./Welcome.jsx";
import Footer from "../Footer/index.jsx";
import Menu from "../Menu/index.jsx";

const Home = () => (
  <Box>
    <Menu />
    <Box>
      <Container maxWidth="xl">
        <Welcome />
        <Box
          sx={{
            marginTop: "20px",
            paddingBottom: "30px",
          }}
        >
          <Social />
        </Box>
      </Container>
      <Box
        sx={{
          paddingY: "40px",
        }}
      >
        <Footer />
      </Box>
    </Box>
  </Box>
);

export default Home;