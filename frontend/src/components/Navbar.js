// import { Stack } from '@mui/material'
// import React from 'react'
// import { Link } from 'react-router-dom'
// import sentilogo from '../assest/images/sentilogo.png'

// const Navbar = () => {
//   return (
//     <Stack direction="row" justifyContent="space-around" sx={{gap:{sm: '100px', xs:'35px'},mt:{sm:'32px', xs:'20px'},justifyContent:'none'}} px="15px">
//       <Link to='/'>
//       <img src={sentilogo} alt='logo' style={{width:'60px', height:'50px', margin:'0 15px'}}></img>
//       </Link>
//       <Stack direction="row" sx={{gap:{lg:"40px", xs:"20px"},fontSize:{lg:"26px",sm:'24px',xs:'18px'}}} alignItems="flex-end">
//         <Link to='/sentiment' style={{textDecoration:'none',color:'#3A1212'}}>Home</Link>
//         <Link to='/create' style={{textDecoration:'none',color:'#3A1212'}}>Create</Link>
//         <Link to='/about' style={{textDecoration:'none',color:'#3A1212'}}>About</Link>
//       </Stack>

//     </Stack>
//   )
// }

// export default Navbar
import { Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import sentilogo from "../assest/images/sentilogo.png";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        px: { lg: "30px", md: "30px", xs: "15px" },
        py: { lg: "10px", xs: "10px" },
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Logo */}
      <Link to="/">
        <img
          src={sentilogo}
          alt="logo"
          style={{
            width: "80px",
            height: "70px",
            cursor: "pointer",
            transition: "0.3s",
          }}
        />
      </Link>

      {/* Navigation Links */}
      <Stack
        direction="row"
        spacing={{ lg: 5, md: 4, xs: 2 }}
        sx={{ fontSize: { lg: "22px", md: "20px", xs: "18px" } }}
      >
        <Link
          to="/sentiment"
          style={{
            textDecoration: "none",
            color: "#f4f6f7",
            fontWeight: "600",
            transition: "0.3s",
            textShadow: '0px 0px 10px white'
          }}
        >
          Home
        </Link>
        <Link
          to="/create"
          style={{
            textDecoration: "none",
            color: "#f4f6f7",
            fontWeight: "600",
            transition: "0.3s",
            textShadow: '0px 0px 10px white'

          }}
        >
          Create
        </Link>
        <Link
          to="/about"
          style={{
            textDecoration: "none",
            color: "#f4f6f7",
            fontWeight: "600",
            transition: "0.3s",
            textShadow: '0px 0px 10px white'

          }}
        >
          About
        </Link>
      </Stack>
    </Stack>
  );
};

export default Navbar;
