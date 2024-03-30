import Button from '@mui/material/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import robot from '../Assets/robot_main.jpg';
import "../Styles/LandingPage.css";
import Footer from './Footer';
import NavBar from './NavBar';

function LandingPage() {
  return (
    <>
    <NavBar/>
    <div className="parent-div">
        <div className="child1">
            <h2>W<span style={{color:"#7B1FA2"}}>it</span>ty - Your <span style={{color:"#7B1FA2"}}>AI</span> Companion</h2>
            <h5>Welcome to the future of conversational AI with Witty - your all-in-one digital companion designed to enhance every aspect of your daily interactions. Whether you're a business professional seeking efficient customer engagement or an individual looking for personalized support and entertainment, Witty is here to revolutionize the way you communicate. Powered by advanced artificial intelligence and natural language processing, Witty offers intuitive conversations, tailored assistance, and round-the-clock availability, making it more than just a chatbot - it's your trusted ally in navigating the complexities of modern life. Join us as we embark on a journey of seamless connectivity and endless possibilities with Witty by your side.</h5>
            <Link to="/botpage"><Button variant="contained"  className='chat-btn'
            // startIcon={<BsRobot/>} 
            color='secondary'
            style={{height:"6vh", width:"20vw", marginTop:"10vh",fontFamily:"Poppins", fontWeight:"700"} }>
                Let's talk with Witty
            </Button>
            </Link>
        </div>
        <div className="child2">
          <img src={robot} alt="" className='land-robot'/>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default LandingPage
