import { Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import sentilogo from "../assest/images/sentilogo.png";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        px: { lg: "30px", md: "30px", xs: "15px" },
        py: { lg: "10px", xs: "10px" },
        position: "sticky",
        top: 0,
        zIndex: 1000,
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
          }}
        />
      </Link>

      {/* Navigation Links */}
      <Stack
        direction="row"
        spacing={{ lg: 5, md: 4, xs: 2 }}
        sx={{ fontSize: { lg: "22px", md: "20px", xs: "18px" } }}
      >
        <Link
          to="/sentiment"
          style={{
            textDecoration: "none",
            color: "#f4f6f7",
            fontWeight: "600",
            transition: "0.3s",
            textShadow: '0px 0px 10px white'
          }}
        >
          Home
        </Link>
        <Link
          to="/create"
          style={{
            textDecoration: "none",
            color: "#f4f6f7",
            fontWeight: "600",
            transition: "0.3s",
            textShadow: '0px 0px 10px white'

          }}
        >
          Create
        </Link>
        <Link
          to="/about"
          style={{
            textDecoration: "none",
            color: "#f4f6f7",
            fontWeight: "600",
            transition: "0.3s",
            textShadow: '0px 0px 10px white'

          }}
        >
          About
        </Link>
      </Stack>
    </Stack>
  );
};

export default Navbar;
