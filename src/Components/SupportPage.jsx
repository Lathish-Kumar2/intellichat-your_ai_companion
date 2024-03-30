import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React from 'react';
import "../Styles/ContactPage.css";
import Footer from './Footer';
import NavBar from './NavBar';


function SupportPage() {
  return (
    <>
      <NavBar/>
        <div className="contact-div">
          <h3>Exceptional Support, Just a Message Away!</h3>
          <p>Need a hand? Reach out to our dedicated customer support team effortlessly through our contact form. We're here to ensure your queries are swiftly addressed and your experience remains exceptional. Connect with us now!</p>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '29.7ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-basic" label="Your Name" variant="outlined" required/> 
            <TextField id="filled-basic" label="Your Email" variant="outlined" required/> <br />
            <TextField id="standard-basic" label="Let us know what you are facing." variant="outlined" multiline style={{width:"40vw"}} rows={6}/> <br />
            <Button variant="contained" color="secondary" style={{ color:"white", fontFamily:"Poppins", fontWeight:"600"}}>Submit</Button>
        </Box>
        </div>
      <Footer/>
    </>
  )
}

export default SupportPage
