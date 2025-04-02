import React, { useState } from "react";
import { TextField, Button, Typography, Card, CardContent,Box, Stack } from "@mui/material";
import { analyzeSentiment } from "../api";
import Navbar from "./Navbar";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
const SentimentAnalyzer = () => {
    const [text, setText] = useState("");
    const [result, setResult] = useState(null);
    const [showmore, setShowMore] = useState(false)

    const handleAnalyze = async () => {
        const data = await analyzeSentiment(text);
        setResult(data);
    };

    return (
        <Box>
            <Navbar/>
            <Typography variant="h5" sx={{marginTop:'30px', fontWeight:'700', fontSize:'50px', color:'black', marginLeft:'34%'}}>Sentiment Analysis</Typography>
                <Box sx={{marginLeft:'25%',border:'2px solid white', width:'90vh',height:'30vh',borderRadius:'30px', backgroundColor:'#fbfcfc'}}>
                <TextField
                    multiline
                    rows={7}
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    variant="outlined"
                    sx={{
                        width: '90vh',
                        height: '20vh',
                        '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            border: 'none', // Remove border
                        },
                        '&:hover fieldset': {
                            border: 'none',
                        },
                        '&.Mui-focused fieldset': {
                            border: 'none',
                        },
                        },
                        '& .MuiInputBase-input': {
                        fontWeight:'500',
                        fontSize: '30px', // Increases typed text font size
                        color: 'black', // Ensures the text is visible
                        },
                    }}
                    />

                <br></br>
                <Button sx={{  textDecoration: 'none',
                  backgroundColor: '#145a32',
                  color: 'white',
                  marginTop:'35px',
                  fontSize: '20px',
                  fontWeight: '700',
                  borderRadius: '60px',
                  padding: '1px',
                  width: '140px',
                  marginLeft: '290px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',  // Center text horizontally
                  textAlign: 'center' }} onClick={handleAnalyze}>
                    Analyze<ArrowOutwardIcon sx={{ color: 'yellow', fontSize: '25px' }} />
                </Button>
                </Box>
                <Box>
                    <Stack direction='column' sx={{marginLeft:'25%', marginTop:'60px'}}>
                        <Typography sx={{width:'200px', backgroundColor:'#ebdef0', fontWeight:'700',fontSize:'30px'
                            ,borderTopLeftRadius:'15px',borderTopRightRadius:'15px',height:'40px',justifyContent:'center',textAlign:'center',
                            display: 'flex'
                        }}>Result</Typography>
                        <Typography 
                            sx={{
                                width: '300px',
                                height: '100px',
                                fontWeight: '700',
                                borderBottomLeftRadius: '15px',
                                borderBottomRightRadius: '15px',
                                borderTopRightRadius:'15px',
                                backgroundColor:'#ebdef0',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                textAlign: 'center',
                                fontSize:'35px'
                            }}
                        >
                            {result?.sentiment || "Waiting...."}
                        </Typography>

                    </Stack>
            
                <br />
                </Box>
                {result && (
                    <CardContent>
                            {result.sentiment === "Negative" ? (
                            <Card variant="outlined" sx={{ mt: 2, p: 2, bgcolor: "#ffebee" }}>
                                <Typography variant="body1" color="error">
                                    Your review is negative. Here’s a more positive way to say it:
                                </Typography>
                                <Typography variant="body2" sx={{ fontStyle: "italic", mt: 1 }}>
                                    {showmore ? result.suggested_improvement : `${result.suggested_improvement.substring(0, 250)}`}
                                </Typography>
                                <Typography onClick={() => setShowMore(!showmore)} sx={{ cursor: "pointer", color: "blue" }}>
                                    {showmore ? "Show less" : "Show more"}
                                </Typography>
                            </Card>
                        ) : (
                            // If sentiment is Positive or Neutral, show nothing
                            null
                        )}
                    </CardContent>
                )}
        </Box>

    );
};

export default SentimentAnalyzer;
