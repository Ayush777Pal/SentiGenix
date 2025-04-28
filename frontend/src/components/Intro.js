import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import sentilogo from '../assest/images/sentilogo.png';

const Intro = () => {
  return (
    <Box>
      <Box
        sx={{
          mt: { lg: "120px", xs: "50px" }, // Adjust top margin for smaller screens
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
          sx={{
            flexDirection: { xs: "column", md: "row" }, // Stacks vertically on small screens
            alignItems: { xs: "center", md: "center" },
          }}
        >
          <Typography
            fontWeight={700}
            sx={{
              fontSize: { lg: "100px", md: "80px", xs: "60px" }, // Adjust font size for smaller screens
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
          direction="row"
          sx={{
            marginTop: "50px",
            justifyContent: "center",
            gap: "15px", // Reduced gap to ensure buttons fit in one line
            alignItems: "center",
            flexWrap: "wrap", // Wraps buttons on smaller screens
          }}
        >
          <Link
            to="/sentiment"
            style={{
              textDecoration: "none",
              backgroundColor: "#FFD700", // Golden Yellow
              color: "#003300", // Dark Green
              fontSize: "18px", // Reduced font size for mobile
              fontWeight: "700",
              borderRadius: "50px",
              padding: "12px 25px", // Adjust padding for better touch targets
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "0.3s",
              maxWidth: "200px", // Max width for buttons on mobile
              flex: "1 1 auto", // Allow buttons to grow and shrink
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
              fontSize: "18px", // Reduced font size for mobile
              fontWeight: "700",
              borderRadius: "50px",
              padding: "12px 25px", // Adjust padding for better touch targets
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "0.3s",
              maxWidth: "200px", // Max width for buttons on mobile
              flex: "1 1 auto", // Allow buttons to grow and shrink
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
