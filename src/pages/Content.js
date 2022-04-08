import React from "react";
import { Link } from "react-router-dom";
import bgOne from "../images/bgOne.webp";
import bgTwo from "../images/bgTwo.webp";
import bgThree from "../images/bgThree.webp";
import bgFour from "../images/bgFour.webp";
import { SHOW_ROUTE } from "../utils/Consts";
import Button from '@mui/material/Button';
import "../pages/Content.css";



const Content = () => {
  return (
    <div className="Content-main">
      <div className='AllContent'>
        <div className="bgImg">
          <img
          className="Img-adapt"
          src={bgOne}
          alt=""
        />
        </div>
        
        <div
        className="content"
        >
          <h2 className="dressCode">DRESS CODE</h2>
          <h3
            style={{
              fontFamily: "var(--theme-font-family)",
              fontSize: "1.25rem",
              letterSpacing: ".125rem",
              lineHeight: "1.3",
            }}
          >
            ОТКРОЙТЕ ДЛЯ СЕБЯ КОЛЛЕКЦИЮ
          </h3>
          <div>
            <Button className="Button" variant="outlined">
              <Link className="Link" to={SHOW_ROUTE}>
                  Для неё
              </Link>
            </Button>
            <Button  className="Button" variant="outlined">
              <Link className="Link" to={SHOW_ROUTE}>
                  Для него
              </Link>
            </Button>
          </div>
        </div>
      </div>


      <hr className="line"/>

      <div className='AllContentTwo' >
        < div className="content">
          <h2>GEORGIA DRESS</h2>
          <h3
            style={{
              fontFamily: "var(--theme-font-family)",
              fontSize: "1.25rem",
              letterSpacing: ".125rem",
              lineHeight: "1.3",
            }}
          >
            ОТКРОЙТЕ ДЛЯ СЕБЯ КОЛЛЕКЦИЮ
          </h3>
          <div>
            <Button className="Button" variant="outlined">
              <Link className="Link" to={SHOW_ROUTE}>
                  Для неё
              </Link>
            </Button>
            <Button className="Button" variant="outlined">
              <Link  className="Link" to={SHOW_ROUTE}>
                  Для него
              </Link>
            </Button>
          </div>
        </div>
        <div className="bgImg">
                  <img
          className="Img-adapt"
          src={bgTwo}
          alt=""
        />
          </div>

          
      </div>


      <hr className="line"/>

      <div className='AllContent'>
      <div className="bgImg">
        <img
          className="Img-adapt"
          src={bgThree}
          alt=""
        />
        </div>
        <div className="content">
          <h2>DRESS CODE</h2>
          <h3
            style={{
              fontFamily: "var(--theme-font-family)",
              fontSize: "1.25rem",
              letterSpacing: ".125rem",
              lineHeight: "1.3",
            }}
          >
            ОТКРОЙТЕ ДЛЯ СЕБЯ КОЛЛЕКЦИЮ
          </h3>
          <div>
            <Button className="Button" variant="outlined">
              <Link className="Link" to={SHOW_ROUTE}>
                  Для неё
              </Link>
            </Button>
            <Button className="Button" variant="outlined">
              <Link className="Link" to={SHOW_ROUTE}>
                  Для него
              </Link>
            </Button>
          </div>
        </div>
      </div>


      <hr className="line"/>

      <div className='AllContentThree'>
        <div className="content">
          <h2>GEORGIA DRESS</h2>
          <h3
            style={{
              fontFamily: "var(--theme-font-family)",
              fontSize: "1.25rem",
              letterSpacing: ".125rem",
              lineHeight: "1.3",
            }}
          >
            ОТКРОЙТЕ ДЛЯ СЕБЯ КОЛЛЕКЦИЮ
          </h3>
          <div>
            <Button className="Button" variant="outlined">
              <Link className="Link" to={SHOW_ROUTE}>
                  Для неё
              </Link>
            </Button>
            <Button className="Button" variant="outlined">
              <Link className="Link" to={SHOW_ROUTE}>
                  Для него
              </Link>
            </Button>
          </div>
        </div>
        <div className="bgImg">
          <img
          className="Img-adapt"
          src={bgFour}
          alt=""
        />
        </div>
        
      </div>

      <hr className="line"/>


    </div>
  );
};

export default Content;
