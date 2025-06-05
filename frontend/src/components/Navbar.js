import { Box, Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import sentilogo from "../assest/images/sentilogo.png";

const Navbar = () => {
  return (
    <Box
      sx={{
        width: "100%",
        position: "sticky",
        top: 0,
        left: 0,
        zIndex: 1000,
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        backdropFilter: "blur(8px)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          px: { lg: "30px", md: "30px", xs: "15px" },
          py: { lg: "10px", xs: "10px" },
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* Logo */}
        <Link to="/">
          <img
            src={sentilogo}
            alt="logo"
            style={{
              width: "80px",
              height: "70px",
              cursor: "pointer",
              transition: "0.3s",
              backgroundColor: "#ffffff",
              borderRadius: "10px",
              padding: "5px",
            }}
          />
        </Link>

        {/* Navigation Links */}
        <Stack
          direction="row"
          spacing={{ lg: 5, md: 4, xs: 2 }}
          sx={{ fontSize: { lg: "22px", md: "20px", xs: "18px" } }}
        >
          <Link to="/sentiment" style={navLinkStyle}>Analyze</Link>
          <Link to="/create" style={navLinkStyle}>Create</Link>
          <Link to="/about" style={navLinkStyle}>About</Link>
        </Stack>
      </Stack>
    </Box>
  );
};

const navLinkStyle = {
  textDecoration: "none",
  color: "#ffffff",
  fontWeight: "600",
  transition: "0.3s",
  textShadow: "0px 0px 10px white",
};

export default Navbar;
