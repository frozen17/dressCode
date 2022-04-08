import React from 'react';
import ReactPlayer from 'react-player'
import videoShirt from '../../video/vilvetVideo.mp4'
import CardMedia from '@mui/material/CardMedia';
import pantsVideo from '../../video/pantsVideo.mp4'
import NewLogo from '../../images/newDressCode.png'
import bccImg from '../../images/backgroundImg.jpg'


const Enjoy = () => {
    return (
      <div>
        <div className='All-content'>
          <div className="home-bcc-img">
          <img style={{
            height: "55vh"
          }} className="main-img" src={bccImg} alt="" />
        </div>
        <div className="home-front">
          <img style={{
            width: "400px"
          }} src={NewLogo} alt="" />
          <h3 style={{
            color: "white"
          }}>
            ШОУ ЖЕНЩИНА И МУЖЧИНА ОСЕНЬ-ЗИМА 2022-23
          </h3>
        </div>
          
          </div>
        <div style={{
            textAlign: "center",
            margin: "10px 0 35px 0",
          }}>
          <iframe width="70%" height="468" src="https://www.youtube.com/embed/0KhUSjbbDGQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        
      </div>
    );
};

export default Enjoy;