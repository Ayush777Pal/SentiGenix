import React, { useState } from "react";
import {
TextField,
Button,
Typography,
Box,
useTheme,
useMediaQuery,
} from "@mui/material";
import { analyzeSentiment } from "../api";
import Navbar from "./Navbar";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import hand from "../assest/images/hand.png";

const SentimentAnalyzer = () => {
const [text, setText] = useState("");
const [result, setResult] = useState(null);
const [showmore, setShowMore] = useState(false);

const theme = useTheme();
const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

const handleAnalyze = async () => {
const data = await analyzeSentiment(text);
console.log("Result from backend:", data);
setResult(data);
};

return (
<Box>
<Navbar />


  {/* Title */}
  <Typography
    variant="h3"
    sx={{
      mt: 5,
      fontWeight: 700,
      textAlign: "center",
      color: "#f1c40f",
      fontSize: { xs: "28px", sm: "34px", md: "40px" },
      lineHeight: 1.2,
    }}
  >
    Sentiment Analysis
  </Typography>

  {/* Horizontal Split Container */}
  <Box
    sx={{
      display: "flex",
      flexDirection: { xs: "column", md: "row" },
      justifyContent: "center",
      alignItems: "flex-start",
      gap: 4,
      p: { xs: 2, sm: 3, md: 4 },
    }}
  >
    {/* Left Half - Input & Button */}
    <Box
      sx={{
        flex: "1 1 45%",
        minWidth: "280px",
        backgroundColor: "#ffffff",
        borderRadius: "15px",
        p: { xs: 2, sm: 3 },
        boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
      }}
    >
      <TextField
        multiline
        rows={4}
        required
        value={text}
        onChange={(e) => setText(e.target.value)}
        variant="outlined"
        fullWidth
        placeholder="Enter your text here..."
        sx={{
          fontSize: "18px",
          "& .MuiOutlinedInput-root": {
            borderRadius: "10px",
          },
        }}
      />

      <Button
        onClick={handleAnalyze}
        fullWidth={isMobile}
        sx={{
          mt: 2,
          backgroundColor: "#145a32",
          color: "white",
          fontSize: "16px",
          fontWeight: "bold",
          borderRadius: "50px",
          px: 2,
          py: 1,
          transition: "0.3s",
          "&:hover": { backgroundColor: "#117a33" },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Analyze
        <ArrowOutwardIcon
          sx={{ color: "yellow", fontSize: "22px", ml: 1 }}
        />
      </Button>
    </Box>

    {/* Right Half - Result & Suggestion Boxes */}
    <Box
      sx={{
        flex: "1 1 45%",
        minWidth: "280px",
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
      {/* Result Box */}
      <Box
        sx={{
          backgroundColor: "#d4e6f1",
          borderRadius: "15px",
          textAlign: "center",
          p: 2,
          boxShadow: "5px 8px 5px 2px rgb(51, 53, 55)",
        }}
      >
        <Typography
          sx={{
            fontWeight: "600",
            fontSize: { xs: "20px", sm: "24px", md: "28px" },
            mb: 1,
          }}
        >
          Result
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: "18px", sm: "22px", md: "26px" },
            fontWeight: "bold",
          }}
        >
          {result?.sentiment || "Waiting..."}
        </Typography>
      </Box>

      {/* Suggestion Box */}
      <Box
        sx={{
          backgroundColor: "#f5cba7",
          borderRadius: "15px",
          textAlign: "center",
          p: 2,
          boxShadow: "5px 8px 5px 2px rgb(51, 53, 55)",
        }}
      >
        <Typography
          sx={{
            fontWeight: "600",
            fontSize: { xs: "20px", sm: "24px", md: "28px" },
            mb: 1,
          }}
        >
          Suggestion
        </Typography>
        <Box sx={{ fontSize: "16px", fontWeight: "500" }}>
          {result && result.sentiment === "Negative ☹️" ? (
            <Box>
              <Typography variant="body2" sx={{ fontStyle: "italic" }}>
                {showmore
                  ? result.suggested_improvement
                  : result.suggested_improvement?.substring(0, 100)}
              </Typography>
              {result.suggested_improvement?.length > 100 && (
                <Typography
                  onClick={() => setShowMore(!showmore)}
                  sx={{
                    cursor: "pointer",
                    color: "blue",
                    fontWeight: "bold",
                    mt: 1,
                  }}
                >
                  {showmore ? "Show less" : "Show more"}
                </Typography>
              )}
            </Box>
          ) : (
            "No suggestions needed."
          )}
        </Box>
      </Box>
    </Box>
  </Box>

  {/* Bottom Hands - Optional Display for Large Screens */}
  {!isMobile && (
    <Box
      sx={{
        position: "relative",
        height: "150px",
        mt: 6,
      }}
    >
      <img
        src={hand}
        alt="hand-left"
        width="200px"
        height="200px"
        style={{
          position: "absolute",
          left: 0,
          bottom: "-40px",
        }}
      />
      <img
        src={hand}
        alt="hand-right"
        width="200px"
        height="200px"
        style={{
          position: "absolute",
          right: 0,
          bottom: "-40px",
          transform: "scaleX(-1)",
        }}
      />
    </Box>
  )}
</Box>
);
};

export default SentimentAnalyzer;