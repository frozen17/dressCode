import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../home/Home.css";
import bg from "../../images/bg.svg";
import bgOne from '../../images/bgOne.webp';
import Content from "../Content";
import { Button } from "@mui/material";

import BeforeFooter from "../../components/footer/BeforeFooter";
import { ENJOY_ROUTE, SHOP_ROUTE } from "../../utils/Consts";
import Review from "../../components/review/Review";
import Latest from "../../components/latest/Latest";
import Feedback from "../../components/feedback/Feedback";
import Navbar from '../../components/nav/Navbar'
import bccImg from '../../images/backgroundImg.jpg'
import NewLogo from '../../images/newDressCode.png'
const Home = () => {
  return (

    <div className="home-main">
      
      <div className="navbar-links">
        <Link className="links" to={SHOP_ROUTE}>
          FASHION
        </Link>
        <Link className="links" to={"/lifestyle"}>
          LIFESTYLE
        </Link>
        <Link className="links" to={"/gifts"}>
          GIFTS
        </Link>
      </div>



      <div className="All-content">


        <div className="home-bcc-img">
          <img className="main-img" src={bccImg} alt="" />
        </div>


        <div className="home-front">
          <img className="home-brand" src={NewLogo} alt="" />
          <h3 className="showWomen">
            ШОУ ЖЕНЩИНА И МУЖЧИНА ОСЕНЬ-ЗИМА 2022-23
          </h3>
          <Button style={{
            borderColor: "white",
            margin: "0"
          }} className="Button" variant="outlined">
              <Link className="showEnjoy" to={ENJOY_ROUTE}>
                Насладиться шоу
              </Link>
          </Button>
          
        </div>


      </div>


   <Content/>
   <Review/>
   <Latest/>
   <Feedback/>
    <BeforeFooter/>
    </div>
  );
};

export default Home;
