import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import sentilogo from '../assest/images/sentilogo.png'

const Intro = () => {
  return (
    <Box>
      <Box
        sx={{
          mt: { lg: "120px", xs: "50px" }, // Reduced top margin
          textAlign: "center",
        }}
      >
        {/* Title & Logo */}
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          gap={2}
        >
          <Typography
            fontWeight={700}
            sx={{
              fontSize: { lg: "100px", md: "80px", xs: "60px" }, // Decreased font size
              background: "linear-gradient(90deg, #fffacd, #ffb347)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            SentiGentix
          </Typography>
          <img
            src={sentilogo}
            alt="logo"
            style={{
              width: "150px",
              height: "120px",
              marginTop: "10px",
            }}
          />
        </Stack>

        {/* Buttons */}
        <Stack
          direction={{ lg: "row", xs: "column" }}
          sx={{
            marginTop: "50px",
            justifyContent: "center",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <Link
            to="/sentiment"
            style={{
              textDecoration: "none",
              backgroundColor: "#FFD700", // Golden Yellow
              color: "#003300", // Dark Green
              fontSize: "24px",
              fontWeight: "700",
              borderRadius: "50px",
              padding: "10px 25px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "0.3s",
              marginRight:'40px'
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#145a32")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#FFD700")}
          >
            Click here
            <ArrowForwardIcon sx={{ color: "#003300", fontSize: "30px", marginLeft: "5px" }} />
          </Link>

          <Link
            to="/about"
            style={{
              textDecoration: "none",
              backgroundColor: "#FFD700", // Golden Yellow
              color: "#003300", // Dark Green
              fontSize: "24px",
              fontWeight: "700",
              borderRadius: "50px",
              padding: "10px 25px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#145a32")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#FFD700")}
          >
            About
            <ArrowForwardIcon sx={{ color: "#003300", fontSize: "30px", marginLeft: "5px" }} />
          </Link>
        </Stack>
      </Box>
    </Box>
  );
};

export default Intro;
