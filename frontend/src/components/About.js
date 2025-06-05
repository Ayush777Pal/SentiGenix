import React from 'react';
import Navbar from './Navbar';
import robot from '../assest/images/robot.png';
import Abhinav from '../assest/images/Abhinav.jpeg';
import Aditya from '../assest/images/Aditya.png';
import Jindal from '../assest/images/Jindal.jpeg';
import ayush from '../assest/images/ayush.jpeg'
import { Box, Stack, Typography, Avatar } from '@mui/material';
import { Grid } from '@mui/material';

const teamMembers = [
  { name: 'Ayush Pal', role: 'Team Lead', branch: 'CSE', rollNo: '2210013135031', img:ayush },
  { name: 'Aditya Kant Kushwaha', role: 'Backend Developer', branch: 'CSE', rollNo: '2210013135009', img: Aditya },
  { name: 'Abhinav Chaurasia', role: 'Frontend Developer', branch: 'CSE', rollNo: '2210013135004', img: Abhinav  },
  { name: 'Ayush Jindal', role: 'Designer/Research', branch: 'CSE', rollNo: '2210013135030', img: Jindal },
];

const About = () => {
  return (
    <Box  sx={{
      bgcolor: "#121212",  
      color: "white",
      minHeight: "100vh",         
      position: "absolute", 
      top: 0,
      left: 0,
      zIndex: -1,
      width: "100%", 
      overflowX: "hidden", 
      paddingX: 0, 
      marginX: 0             
    }}>
      <Navbar />
      <Stack alignItems="center" textAlign="center" spacing={3} p={3}>
        <Typography
          fontWeight={700}
          sx={{
            fontSize: { lg: '80px', md: '70px', xs: '50px' },
            background: 'linear-gradient(90deg, #ff9a9e, #fad0c4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: 1.3,
          }}
        >
          SentiGentix
        </Typography>
        <Typography
          sx={{ fontSize: { lg: '28px', xs: '18px' }, color: '#ccc', lineHeight: 1.5 }}
        >
          Analyzing & Enhancing Sentiments with AI
        </Typography>
        <Typography sx={{ fontSize: { lg: '18px', xs: '14px' }, color: '#aaa', maxWidth: '85%' }}>
          SentiGenix is an AI-powered sentiment analysis tool that helps users analyze the emotions behind text and
          improve negative feedback constructively. Using NLP and Google Gemini AI, it identifies whether a given text
          is Positive, Negative, or Neutral and provides enhanced, constructive versions of negative feedback.
        </Typography>
        <Box>
          <img src={robot} alt="robot" style={{ maxWidth: '100%', height: 'auto' }} />
        </Box>
        <Typography
          fontWeight={700}
          sx={{
            fontSize: { lg: '50px', md: '40px', xs: '30px' },
            background: 'linear-gradient(90deg, #ff9a9e, #fad0c4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: 3,
          }}
        >
          Our Team
        </Typography>
        <Grid container spacing={4} justifyContent="center">
  {teamMembers.map((member, index) => (
    <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
        <Box
          sx={{
            width: "200px",
            height: "200px",
            backgroundColor: "#1e1e1e",
            padding: 3,
            borderRadius: 2,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            margin: "0 auto",
          }}
        >

        <Avatar
          src={member.img}
          sx={{ width: 100, height: 100, margin: "0 auto 1rem" }}
        />
        <Typography variant="h6">{member.name}</Typography>
        <Typography variant="body2">{member.role}</Typography>
        <Typography variant="body2">{member.branch}</Typography>
        <Typography variant="body2">{member.rollNo}</Typography>
      </Box>
    </Grid>
  ))}
    </Grid>
      </Stack>
    </Box>
  );
};

export default About;
