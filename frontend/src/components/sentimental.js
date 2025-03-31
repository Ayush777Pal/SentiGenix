import React, { useState } from "react";
import { TextField, Button, Typography, Container, Card, CardContent } from "@mui/material";
import { analyzeSentiment } from "../api";

const SentimentAnalyzer = () => {
    const [text, setText] = useState("");
    const [result, setResult] = useState(null);
    const [showmore, setShowMore] = useState(false)

    const handleAnalyze = async () => {
        const data = await analyzeSentiment(text);
        setResult(data);
    };

    return (
        // <Container maxWidth="sm">
        //     <Card variant="outlined" sx={{ mt: 5, p: 3 }}>
        //         <Typography variant="h5">Sentiment Analysis</Typography>
        //         <TextField
        //             fullWidth
        //             multiline
        //             rows={4}
        //             label="Enter Review"
        //             variant="outlined"
        //             value={text}
        //             onChange={(e) => setText(e.target.value)}
        //             sx={{ mt: 2 }}
        //         />
        //         <Button variant="contained" sx={{ mt: 2 }} onClick={handleAnalyze}>
        //             Analyze
        //         </Button>
        //         {result && (
        //             <CardContent>
        //                 <Typography variant="h6">Result: {result.sentiment}</Typography>
        //                 <Typography variant="body2">Review: {result.review}</Typography>
        //             </CardContent>
        //         )}
        //     </Card>
        // </Container>
        <Container maxWidth="sm">
            <Card variant="outlined" sx={{ mt: 5, p: 3 }}>
                <Typography variant="h5">Sentiment Analysis</Typography>
                <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="Enter Review"
                    variant="outlined"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    sx={{ mt: 2 }}
                />
                <Button variant="contained" sx={{ mt: 2 }} onClick={handleAnalyze}>
                    Analyze
                </Button>

                {result && (
                    <CardContent>
                        <Typography variant="h6">Result: {result.sentiment}</Typography><br></br>
                        <Typography variant="body2">Review: {result.review}</Typography>

                        {result.sentiment === "Negative" && (
                            <Card variant="outlined" sx={{ mt: 2, p: 2, bgcolor: "#ffebee" }}>
                                <Typography variant="body1" color="error">
                                    Your review is negative. Here’s a more positive way to say it:
                                </Typography>
                                <Typography variant="body2" sx={{ fontStyle: "italic", mt: 1 }}>
                                    {showmore?result.suggested_improvement:`${result.suggested_improvement.substring(0,250)}`}
                                    <Typography onClick={()=>setShowMore(!showmore)}>{showmore?"Show less":"Show more"}</Typography>
                                    {/* "{result.suggested_improvement}" */}
                                </Typography>
                            </Card>
                        )}
                    </CardContent>
                )}
            </Card>
        </Container>
    );
};

export default SentimentAnalyzer;
