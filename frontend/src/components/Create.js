import React, { useState } from "react";
import {
TextField,
Button,
Typography,
Box,
Stack,
ButtonGroup,
} from "@mui/material";
import { CreateSentiment } from "../api";
import Navbar from "./Navbar";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import hand from "../assest/images/hand.png";

const Create = () => {
const [text, setText] = useState("");
const [result, setResult] = useState(null);
const [showmore, setShowMore] = useState(false);
const [selected, setSelected] = useState("neutral");
const [loading, setLoading] = useState(false);

const options = [
{ label: "Negative", value: "negative" },
{ label: "Neutral", value: "neutral" },
{ label: "Positive", value: "positive" },
];

const handleAnalyze = async () => {
setLoading(true);
setResult(null);
const data = await CreateSentiment(text, selected);
setResult(data);
setLoading(false);
};

return (
<Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
{/* Fixed Top Navbar */}
<Box sx={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 1100 }}>
<Navbar />
</Box>


  {/* Add marginTop to compensate for fixed navbar height */}
  <Box sx={{ mt: { xs: 12, sm: 14 }, px: 2, pb: 4, flex: 1 }}>
  {/* Title */}
  <Typography
  variant="h3"
  sx={{
    mt: 5, // ✅ slightly reduced top margin
    fontWeight: 700,
    textAlign: "center",
    color: "#f1c40f",
    lineHeight: 1.2,
    fontSize: {
xs: "28px", sm: "34px", md: "40px"
    },
  }}
>
  Craft Tailored Insights
</Typography>



    {/* Main Two-Column Layout */}
    <Stack
      direction={{ lg: "row", xs: "column" }}
      justifyContent="center"
      alignItems="flex-start"
      spacing={4}
      sx={{ mt: 5 }}
    >
      {/* Left: Input and Button */}
      <Box
        sx={{
          width: "100%",
          maxWidth: { xs: "100%", lg: "45%" },
          p: 3,
          borderRadius: "15px",
          backgroundColor: "#ffffff",
          boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
          boxSizing: "border-box",
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
            width: "100%",
            boxSizing: "border-box",
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
            },
          }}
        />

        <Button
          onClick={handleAnalyze}
          sx={{
            mt: 2,
            backgroundColor: "#145a32",
            color: "white",
            fontSize: "18px",
            fontWeight: "bold",
            borderRadius: "50px",
            px: 3,
            py: 1,
            transition: "0.3s",
            "&:hover": { backgroundColor: "#117a33" },
          }}
        >
          Craft Yours
          <ArrowOutwardIcon
            sx={{ color: "yellow", fontSize: "25px", ml: 1 }}
          />
        </Button>
      </Box>

      {/* Right: Sentiment and Suggestion */}
      <Box
        sx={{
          width: "100%",
          maxWidth: { xs: "100%", lg: "45%" },
          display: "flex",
          flexDirection: "column",
          gap: 3,
          boxSizing: "border-box",
        }}
      >
        {/* Sentiment Selection */}
        <Box
          sx={{
            backgroundColor: "#d4e6f1",
            borderRadius: "15px",
            p: 2,
            textAlign: "center",
            boxShadow: "5px 8px 5px 2px rgb(51, 53, 55)",
          }}
        >
          <Typography sx={{ fontWeight: "600", fontSize: "25px", mb: 1 }}>
            Select Sentiment
          </Typography>
          <ButtonGroup>
            {options.map((option) => (
              <Button
                key={option.value}
                onClick={() => setSelected(option.value)}
                sx={{
                  bgcolor: selected === option.value ? "#d81b60" : "white",
                  color: selected === option.value ? "white" : "black",
                  "&:hover": {
                    bgcolor:
                      selected === option.value ? "#ad1457" : "#f0f0f0",
                  },
                  borderRadius: "50px",
                  px: 2,
                  py: 1,
                  textTransform: "capitalize",
                }}
              >
                {option.label}
              </Button>
            ))}
          </ButtonGroup>
        </Box>

        {/* Suggestions */}
        <Box
          sx={{
            backgroundColor: "#f5cba7",
            borderRadius: "15px",
            p: 2,
            textAlign: "center",
            minHeight: "100px",
            boxShadow: "5px 8px 5px 2px rgb(51, 53, 55)",
          }}
        >
          <Typography sx={{ fontWeight: "600", fontSize: "28px", mb: 1 }}>
            Suggestion
          </Typography>
          <Box sx={{ fontSize: "18px", fontWeight: "500" }}>
            {loading ? (
              <Typography sx={{ fontSize: "26px", fontWeight: "bold" }}>
                Waiting...
              </Typography>
            ) : result ? (
              <Box>
                <Typography variant="body2" sx={{ fontStyle: "italic" }}>
                  {showmore
                    ? result.created_review
                    : result.created_review?.substring(0, 100)}
                </Typography>
                {result.created_review?.length > 100 && (
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
    </Stack>

    {/* Bottom Hand Images */}
    <Box
      sx={{
        position: "relative",
        height: "150px",
        mt: 6,
        display: { xs: "none", sm: "block" }, // hide on extra small
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
  </Box>
</Box>
);
};

export default Create;