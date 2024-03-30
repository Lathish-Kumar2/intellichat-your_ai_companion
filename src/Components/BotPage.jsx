import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { FaMicrophone } from "react-icons/fa6";
import { IoSend } from "react-icons/io5";
import '../Styles/BotPage.css';
import RecentSection from './RecentSection';

function BotPage() {
  const [showMenu,setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

 

  return (
    <>
    <div className="main-div">
      <RecentSection/>
      <div className="content-div">
        <div className="header">
          <h3>W<span style={{color:"red"}}>it</span>ty - Your <span style={{color:"red"}}>AI</span> Companion <span></span></h3>
          <button className={`menu-btn ${showMenu ? 'open' : ''}`} onClick={toggleMenu}><FaBars style={{fontSize:"4vh"}}/></button>
        </div>
        <div className="chat-area-div">
           <div className="menu-div" style={{display: showMenu?'block':'none'}}>
            <ul>
              <li>Home</li>
              {/* <li>About</li>
              <li>Contact</li> */}
              <li>Logout</li>
            </ul>
          </div>
        </div>
        <div className="text-div">
          <button className="btns mic-btn"><FaMicrophone/></button>
          <textarea name="user-text" id="" cols="90" rows="1" placeholder="Let's Chat . . .">

          </textarea>
          <button className="btns send-btn" ><IoSend/></button>
        </div>
      </div> 
      {/* <img src={logo} alt="" /> */}
     
    </div>
    </>
  )
}

export default BotPage
