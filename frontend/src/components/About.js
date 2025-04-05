import React from 'react';
import Navbar from './Navbar';
import robot from '../assest/images/robot.png';
import Abhinav from '../assest/images/Abhinav.jpeg';
import Aditya from '../assest/images/Aditya.png';
import Jindal from '../assest/images/Jindal.jpeg';
import ayush from '../assest/images/ayush.jpeg'
import { Box, Stack, Typography, Avatar } from '@mui/material';

const teamMembers = [
  { name: 'Ayush Pal', role: 'Team Lead', branch: 'CSE', rollNo: '2210013135031', img:ayush },
  { name: 'Aditya', role: 'Backend Developer', branch: 'CSE', rollNo: '2210013135009', img: Aditya },
  { name: 'Abhinav', role: 'Frontend Developer', branch: 'CSE', rollNo: '2210013135004', img: Abhinav  },
  { name: 'Ayush Jindal', role: 'Designer/Research', branch: 'CSE', rollNo: '2210013135030', img: Jindal },
];

const About = () => {
  return (
    <Box  sx={{
      bgcolor: "#121212",  
      color: "white",
      minHeight: "100vh",  
      width: "100vw",       
      position: "absolute", 
      top: 0,
      left: 0,
      zIndex: -1            
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
        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
          spacing={3}
          width="100%"
        >
          {teamMembers.map((member, index) => (
            <Box
              key={index}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: { lg: '220px', xs: '50%' },
                padding: 3,
                borderRadius: 3,
                boxShadow: 5,
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(10px)',
                textAlign: 'center',
                color: 'white',
                mb:{xs:'50px'}
              }}
            >
              <Avatar src={member.img} alt={member.name} sx={{ width: 90, height: 90, marginBottom: 2 }} />
              <Typography variant="h6" fontWeight="bold">
                {member.name}
              </Typography>
              <Typography variant="body2" color="#ddd">
                Contribution: {member.role}
              </Typography>
              <Typography variant="body2" color="#ddd">
                Roll No: {member.rollNo}
              </Typography>
              <Typography variant="body2" color="#ddd">
                Branch: {member.branch}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
};

export default About;
