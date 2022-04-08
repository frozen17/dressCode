import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from "react-router-dom";
import { Card } from '@mui/material';
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';
import CustomizedBadges from '../basket/CustomizedBadges';
import IconButton from '@mui/material/IconButton';



const fetchData = () => {
    return axios
      .get(`http://localhost:3004/items`)
      .then((response) => response.data);
  };

const Basket = (props) => {
    const { id } = useParams();
    const [names, setNames ] = useState([])
    const { items } = props;

    useEffect(() => {
        fetchData(id).then((data) => setNames(data));
      }, [id]);

const handleNoneComplete = async(e, id, name, description, price, composition, url, urlOne, urlTwo, urlThree, urlFour, isLiked) => {
  e.preventDefault()
  await axios.put(`http://localhost:3004/items/${id}`, {
    name,
    description,
    price,
    composition,
    url,
    urlOne,
    urlTwo,
    urlThree,
    urlFour,
    isLiked,
    isBasket: false
  })
  
  fetchData(id).then((data) => setNames(data));
}

    return (
        <div>
          <div>
            <h4 style={{
              textAlign: "center",
              margin: "20px 0",
              fontSize: "20px"
            }}>У вас есть товары в корзине</h4>
          </div>
          <div style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap"
          }}>
            {names.filter(name => name.isBasket == true ).map((name) => {
                return (
                  <Card
                  key={name.id}
                    sx={{
                      width: 370,
                      overflow: "hidden",
                      marginBottom: "40px",
                    }}
                  >
                    <IconButton color="primary" aria-label="add to shopping cart">
                  <RemoveShoppingCartOutlinedIcon
                  titleAccess="Удалить из корзины"                   
                  onClick={(e) =>
                    handleNoneComplete(
                      e,
                      name.id,
                      name.name,
                      name.description,
                      name.price,
                      name.composition,
                      name.url,
                      name.urlOne,
                      name.urlTwo,
                      name.urlThree,
                      name.urlFour,
                      name.isLiked
                    )
                  }style={{ color: "black" }}
                  />
                  
                  </IconButton>
                       <CardMedia
                className="shopImg"
                component="img"
                height="430"
                image={name.urlOne}
                alt="wait pls"
              />
                    <div style={{
                        padding: "10px 10px"
                      }}>
                        <Typography><Link style={{
                    color: "black",
                    textDecoration: "none",
                    textAlign: "center",
                  }}  key={name.id} to={`/basket/${name.id}`}>{name.name}</Link></Typography>
                      <Typography>Цена: {name.price}</Typography>
                      </div>                  
                  </Card>
                );
            })|| "nothing"}  
          </div>
              
            <div style={{
                  display: "none"
                }}>
                  <CustomizedBadges names={names.length}/>

                </div>            
        </div>
    );
};

export default Basket;