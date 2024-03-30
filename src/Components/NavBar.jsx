import { LoginSharp } from '@mui/icons-material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import MailIcon from '@mui/icons-material/Mail';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import React from 'react';
import { IoMdHelpCircle } from "react-icons/io";
import { Link } from 'react-router-dom';
import "../Styles/NavBar.css";

function NavBar() {
  return (
     <div className="nav-header">
        <div className="left-side">
             Witty - Your AI Companion
        </div>
        <div className="right-side">
            <Stack direction="row" spacing={2}>
            <Link to="/"><Button variant="outlined" startIcon={<HomeIcon />} color='secondary' style={{border:"none", fontFamily:"Poppins",fontWeight:"600"}}>
                Home
            </Button>
            </Link>
            <Link to="/about"><Button variant="outlined" startIcon={<InfoIcon />} color='secondary' style={{border:"none", fontFamily:"Poppins",fontWeight:"600"}}>
                About
            </Button>
            </Link>
             <Link to="/contactus"><Button variant="outlined" startIcon={<MailIcon/>}  color='secondary' style={{border:"none", fontFamily:"Poppins",fontWeight:"600"}}>
                Contact
            </Button>
            </Link>
            <Link to="/support"><Button variant="outlined" startIcon={<IoMdHelpCircle />} color='secondary' style={{border:"none", fontFamily:"Poppins",fontWeight:"600"}}>
                Support
            </Button>
            </Link>
             <Button variant="contained" endIcon={<LoginSharp/>} color='secondary' style={{marginLeft:"3vw", width:"8vw", fontFamily:"Poppins",fontWeight:"600"}}>
                Login
            </Button>
            </Stack>
        </div>
    </div>
  )
}

export default NavBar
