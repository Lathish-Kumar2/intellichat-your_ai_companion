import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import React from 'react';
import "../Styles/ContactPage.css";
import Footer from './Footer';
import NavBar from './NavBar';


function ContactPage() {
  return (
    <>
      <NavBar/>
        <div className="contact-div">
          <h3>Share Your Experience and Let Your Voice Be Heard!</h3>
          <p>We're eager to hear from you! Share your thoughts, experiences, and feedback with us through our contact form. Your input drives our improvement, so don't hold back - we're listening!</p>
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
            <TextField id="standard-basic" label="Response" variant="outlined" multiline style={{width:"40vw"}} rows={6}/> <br />
            <Button variant="contained" color="secondary" style={{ color:"white", fontFamily:"Poppins", fontWeight:"600"}}>Submit</Button>
        </Box>
        <h3>Reach us out!</h3>
        <p style={{fontFamily:"Poppins", fontWeight:"700"}}>Email : info@WittyAi.com</p>
        <p style={{fontFamily:"Poppins", fontWeight:"700"}}>Phone : 987-5432-123</p>
        </div>
      <Footer/>
    </>
  )
}

export default ContactPage
