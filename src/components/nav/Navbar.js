import React, { useState, useContext } from "react";
import "../nav/Navbar.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { LOGIN_ROUTE, PROFILE_ROUTE, REGISTRATION_ROUTE } from "../../utils/Consts";
import { Context } from "../../context/Context";
import PersonPinIcon from '@mui/icons-material/PersonPin';
import AccountMenu from "../menu/Menu";
import CustomizedBadges from "../../pages/public/basket/CustomizedBadges";
import ColorBadge from "../../pages/public/like/liked/Liked";
import AccessibleBadges from "../../pages/public/like/liked/Liked";




const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent
      style={{
        width: "100%",
        textAlign: "center",
        letterSpacing: ".025rem",
        
      }}
    >
      <Typography
        style={{
          fontSize: 15,
          textAlign: "center",
          fontFamily: "AktivGrotesk-Bold!important",
          color: "var(--theme-color)",
          margin: "15px 0",
          fontWeight: "550"
        }}
        color="text.secondary"
        gutterBottom
      >
        ЗАРЕГИСТРИРОВАННЫЙ ПОЛЬЗОВАТЕЛЬ
      </Typography>
      <Typography
        style={{
          fontSize: "15px",
          margin: "15px 0"
        }}
        variant="h5"
        component="div"
      >
        Войдите в свой личный кабинет.
      </Typography>
      <Link
        style={{
          fontSize: "15px",
          border: "1px solid",
          textDecoration: "none",
          padding: "5px 20px",
          backgroundColor: "black",
          color: "#fff",
          margin: "15px 10px",
          
        }}
        to={LOGIN_ROUTE}
      >
        Войти
      </Link>
      <Typography  style={{
          fontSize: 15,
          textAlign: "center",
          fontFamily: "AktivGrotesk-Bold!important",
          color: "var(--theme-color)",
          borderTop: "1px solid #f6f6f6",
          paddingTop: "16px",
        }} variant="body2">
       
        НОВЫЙ ПОЛЬЗОВАТЕЛЬ
        
      </Typography>
      <Typography style={{
        fontSize: "10px",
        margin: "15px 0",
      }}>
      Зарегистрируйтесь прямо сейчас и воспользуйтесь преимуществами личного кабинета.
      </Typography>
      <Link style={{
          fontSize: "20px",
          border: "1px solid black",
          textDecoration: "none",
          padding: "5px 10px",
          color: "white",
          backgroundColor: "black",
          padding: "5px 20px",
        }}
        className="signUp" to={ REGISTRATION_ROUTE }>Зарегистрироваться</Link>
    </CardContent>
    
  </React.Fragment>
);

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#fff",
    color: "fff",
    maxWidth: 380,
    height: 300,
    fontSize: theme.typography.pxToRem(5),
    border: "1px solid #dadde9",
  },
}));

const Navbar = () => {

const { dispatch, user } = useContext(Context)

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <img
          style={{
            width: "100px",
          }}
          src={logo}
          alt=""
        />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              {user 
              ?
              <Link
              to={PROFILE_ROUTE}
              className="nav-link active"
              aria-current="page"
              href="#"
              style={{
                
              }}
            >
              ДОБРО ПОЖАЛОВАТЬ {user.login}
            </Link>
              :
              (<HtmlTooltip
                title={
                  <Box>
                    <Card
                      style={{
                        border: "none",
                      }}
                      variant="outlined"
                    >
                      {card}
                    </Card>
                  </Box>
                }
              >
                <Link
                  to={`/`}
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  ЛИЧНЫЙ КАБИНЕТ
                </Link>
              </HtmlTooltip>)
            }
            </li>
            <li className="nav-item">
              <Link
                to={`/contact`}
                className="nav-link active"
                aria-current="page"
                href="#"
              >
                СВЯЖИТЕСЬ С НАМИ
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={`shops`}
                className="nav-link active"
                aria-current="page"
                href="#"
              >
                СЕТЬ МАГАЗИНОВ
              </Link>
            </li>
            <img src={<SearchIcon/>} alt="" />
            
            {user 
            ?
            (
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}>
                <AccessibleBadges/>
                <CustomizedBadges/>
                <AccountMenu/>                
              </div>
            )
            :
            ("") 
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
