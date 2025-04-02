import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import sentilogo from '../assest/images/sentilogo.jpeg'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Intro = () => {
  return (
    <Box>
   <Box sx={{
            mt:{lg:'170px', xs:"70px"},
            ml:{lg:'400px',xs:'250px'},
          }
            }>
              <Stack direction='row'>
              <Typography fontWeight={700} sx={{fontSize:{lg:'140px', xs:'90px'}}}>SentiGentix </Typography>
              <img src={sentilogo} alt='logo' style={{width:'200px', height:'150px', marginTop:'18px', marginLeft:'10px'}}></img>
              </Stack>
              <Stack direction='row' sx={{marginTop:'40px', marginLeft:'60px'}}>
              <Link 
                to="/sentiment" 
                style={{
                  textDecoration: 'none',
                  backgroundColor: '#145a32',
                  color: 'white',
                  fontSize: '30px',
                  fontWeight: '700',
                  borderRadius: '60px',
                  padding: '10px',
                  width: '170px',
                  marginLeft: '130px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',  // Center text horizontally
                  textAlign: 'center' // Ensures text alignment
                }}
              >
                Click here<ArrowForwardIcon sx={{ color: 'yellow', fontSize: '35px' }} />
              </Link>

              <Link 
                to="/sentiment" 
                style={{
                  textDecoration: 'none',
                  backgroundColor: '#145a32',
                  color: 'white',
                  fontSize: '30px',
                  fontWeight: '700',
                  borderRadius: '60px',
                  padding: '10px',
                  width: '170px',
                  marginLeft: '130px',
                  paddingLeft: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',  // Center text horizontally
                  textAlign: 'center' // Ensures text alignment
                }}
              >
                About<ArrowForwardIcon sx={{ color: 'yellow', fontSize: '35px' }} />
              </Link>
             </Stack>
        </Box>   
    </Box>

  )
}

export default Intro