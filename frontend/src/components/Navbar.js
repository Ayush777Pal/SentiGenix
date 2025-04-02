import { Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import sentilogo from '../assest/images/sentilogo.jpeg'

const Navbar = () => {
  return (
    <Stack direction="row" justifyContent="space-around" sx={{gap:{sm: '100px', xs:'35px'},mt:{sm:'32px', xs:'20px'},justifyContent:'none'}} px="15px">
      <Link to='/'>
      <img src={sentilogo} alt='logo' style={{width:'60px', height:'50px', margin:'0 15px'}}></img>
      </Link>
      <Stack direction="row" sx={{gap:{lg:"40px", xs:"20px"},fontSize:{lg:"26px",sm:'24px',xs:'18px'}}} alignItems="flex-end">
        <Link to='/sentiment' style={{textDecoration:'none',color:'#3A1212'}}>Home</Link>
        <Link to='/create' style={{textDecoration:'none',color:'#3A1212'}}>Create</Link>
      </Stack>

    </Stack>
  )
}

export default Navbar