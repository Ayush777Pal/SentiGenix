import React, { useState } from "react";
import { TextField, Button, Typography, Box, Stack } from "@mui/material";
import { analyzeSentiment } from "../api";
import Navbar from "./Navbar";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import hand from "../assest/images/hand.png"

const SentimentAnalyzer = () => {
    const [text, setText] = useState("");
    const [result, setResult] = useState(null);
    const [showmore, setShowMore] = useState(false);

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
                    lineHeight:.5,
                    textShadow: '0px 0px 10px rgb(238, 212, 79)'

                }}
            >
                Sentiment Analysis
            </Typography>

            {/* Input Section */}
            <Box
                sx={{
                    width: { lg: "45%", xs: "75%" },
                    mx: "auto",
                    mt: 4,
                    p: 3,
                    pb:1,
                    borderRadius: "15px",
                    backgroundColor: "#ffffff",
                    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
                    textAlign: "center",
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
                    sx={{
                        mt: 2,
                        mb:0,
                        backgroundColor: "#145a32",
                        color: "white",
                        fontSize: "18px",
                        fontWeight: "bold",
                        borderRadius: "50px",
                        px: 2,
                        py: 0.5,
                        transition: "0.3s",
                        "&:hover": { backgroundColor: "#117a33" },
                    }}
                >
                    Analyze
                    <ArrowOutwardIcon sx={{ color: "yellow", fontSize: "25px", ml: 1 }} />
                </Button>
            </Box>

            {/* Results Section */}
            <Stack
                direction={{ lg: "row", xs: "column" }}
                spacing={3}
                justifyContent="center"
                alignItems="center"
                mt={5}
            >
                {/* Result Box */}
                <Box
                    sx={{
                        width: { lg: "280px", xs: "70%" },
                        backgroundColor: "#d4e6f1",
                        borderRadius: "15px",
                        textAlign: "center",
                        p: 2,
                        pt:.5,
                        marginRight:3,
                        boxShadow: "5px 8px 5px 2px rgb(51, 53, 55)"
                    }}
                >
                    <Typography sx={{ fontWeight: "600", fontSize: "28px", mb: 1, justifyContent:'center',alignItems:"center"
                            }}>Result</Typography>
                    <Typography sx={{ fontSize: "26px", fontWeight: "bold" }}>
                        {result?.sentiment || "Waiting..."}
                    </Typography>
                </Box>

                {/* Suggestion Box */}
                <Box
                    sx={{
                        width: { lg: "350px", xs: "70%" },
                        height:{lg:'100px',xs:"50%"},
                        backgroundColor: "#f5cba7",
                        borderRadius: "15px",
                        textAlign: "center",
                        p: 2,
                        pt:.5,
                        boxShadow: "5px 8px 5px 2px rgb(51, 53, 55)"
                    }}
                >
                    <Typography sx={{ fontWeight: "600", fontSize: "28px", mb: 1 }}>Suggestion</Typography>
                    <Box sx={{ fontSize: "18px", fontWeight: "500" }}>
                        {result && result.sentiment === "Negative ☹️" ? (
                            <Box>
                                <Typography variant="body2" sx={{ fontStyle: "italic" }}>
                                    {showmore ? result.suggested_improvement: result.suggested_improvement?.substring(0, 100)}
                                </Typography>
                                {result.suggested_improvement?.length > 100 && (
                                    <Typography
                                        onClick={() => setShowMore(!showmore)}
                                        sx={{ cursor: "pointer", color: "blue", fontWeight: "bold", mt: 1 }}
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
            </Stack>
            {/*Bottom Hand */}
            <Box>
            <img
                src={hand}
                alt="hand"
                width="200px"
                height="200px"
                style={{  position: "absolute",
                    left: 0,
                    bottom: 0,}}
                />

                <img
                src={hand}
                alt="hand"
                width="200px"
                height="200px"
                style={{   position: "absolute",
                    right: 0,
                    bottom: 0,
                    transform: "scaleX(-1)",
                 }}
                />


            </Box>
        </Box>
    );
};

export default SentimentAnalyzer;
