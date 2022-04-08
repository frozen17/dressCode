import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Basket from "./admin/Basket";
import Divider from "@mui/material/Divider";
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import './Shop.css'
import CustomizedBadges from "./basket/CustomizedBadges";
import Loved from "./like/Loved";
import { HOME_ROUTE, SHOP_ROUTE, SHOW_ROUTE} from '../../utils/Consts'
import IconButton from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'







const fetchData = () => {
  return axios
    .get(`https://hpap.herokuapp.com/home/api`)
    .then((response) => response.data);
};



const Shop = () => {
  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [isLiked, setLiked] = useState(false)



  useEffect(() => {
    fetchData(id).then((data) => setItems(data));
    
  }, [id]);



const handleComplete = async(e, id, name, description, price, composition, url, urlOne, urlTwo, urlThree, urlFour, isLiked) => {
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
      isBasket: true
    })
    fetchData(id).then((data) => setItems(data));
    
}

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
  
  fetchData(id).then((data) => setItems(data));
}

const handleChangeColor = async(e, id, name, description, price, composition, url, urlOne, urlTwo, urlThree, urlFour, isBasket) => {
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
    isBasket,
    isLiked: 1
  })
  
  fetchData(id).then((data) => setItems(data));
}

const handleRemoveColor = async(e, id, name, description, price, composition, url, urlOne, urlTwo, urlThree, urlFour, isBasket) => {
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
    isBasket,
    isLiked: 0
  })
  
  fetchData(id).then((data) => setItems(data));
}


  return (
    <div style={{ width: "90%", margin: "0 auto" }}>
      <div><Link className="navigation" to={HOME_ROUTE}>Главная</Link> | <Link className="navigation" to={SHOW_ROUTE}>Женщина</Link> | <Link className="navigationMain" to={SHOP_ROUTE}>Одежда</Link></div>
      <div className="Title">
        <h2 className="clothes"> ОДЕЖДА </h2>
        <h5>({items.length})</h5>
      </div>
      
  


      <div className="Card-item">
        {items.map((item) => (
          <Card
            key={item.id}
            sx={{ width: 370, overflow: "hidden", marginBottom: "40px" }}
          >
            <CardActionArea>
              <CardMedia
                className="shopImg"
                component="img"
                height="430"
                image={item.url}
                alt="wait pls"
              />
              <CardContent>
                <Typography gutterBottom variant="h6" component="div">
                  <Link style={{
                    color: "black",
                    textDecoration: "none",
                    textAlign: "center",
                  }} key={item.id} to={`/shop/${item.id}`}>
                  {item.name}
                   </Link>
                </Typography>
              </CardContent>
              <Typography gutterBottom variant="h6" component="div">
                 
              </Typography>
            </CardActionArea>
            <Divider  style={{
                border: "1px solid #eee"
            }}/>
            <CardActions style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center"
            }}>
              <Typography gutterBottom variant="h5" component="div">
                  {item.price}
              </Typography>
              <div>

              
              {item.isBasket ? (
                <IconButton color="primary" aria-label="add to shopping cart">
                  <RemoveShoppingCartOutlinedIcon
                  titleAccess="Удалить из корзины"                   
                  onClick={(e) =>
                    handleNoneComplete(
                      e,
                      item.id,
                      item.name,
                      item.description,
                      item.price,
                      item.composition,
                      item.url,
                      item.urlOne,
                      item.urlTwo,
                      item.urlThree,
                      item.urlFour,
                      item.isLiked
                    )
                  }style={{ color: "black" }}
                  />
                  
                  </IconButton>
              ) : (
                <IconButton color="primary" aria-label="add to shopping cart">
                  <AddShoppingCartIcon
                  titleAccess="В корзину"
                  
                  onClick={(e) =>
                    handleComplete(
                      e,
                      item.id,
                      item.name,
                      item.description,
                      item.price,
                      item.composition,
                      item.url,
                      item.urlOne,
                      item.urlTwo,
                      item.urlThree,
                      item.urlFour,
                      item.isLiked
                    )
                  }style={{ color: "black" }}
                  />
                  
                  </IconButton>
              )}
              {item.isLiked !== 1 ? (
                <IconButton aria-label="delete" size="large">
                <FavoriteBorderRoundedIcon
                titleAccess="Нравится"
                  onClick={(e) =>
                    handleChangeColor(
                      e,
                      item.id,
                      item.name,
                      item.description,
                      item.price,
                      item.composition,
                      item.url,
                      item.urlOne,
                      item.urlTwo,
                      item.urlThree,
                      item.urlFour,
                      item.isBasket
                    )
                  }
                  style={{ color: "black" }}
                />
                </IconButton>
              ) : (
                <IconButton aria-label="delete" size="large">
                        <FavoriteIcon onClick={(e) =>
                    handleRemoveColor(
                      e,
                      item.id,
                      item.name,
                      item.description,
                      item.price,
                      item.composition,
                      item.url,
                      item.urlOne,
                      item.urlTwo,
                      item.urlThree,
                      item.urlFour,
                      item.isBasket
                    )
                  } style={{color: "red"}} />
                      </IconButton>
              )}
              </div>
            </CardActions>
            <div style={{display: "none"}}>
        <Loved props={handleChangeColor}/>
       <Basket items={items} handleNoneComplete={handleNoneComplete}/>
      <CustomizedBadges name={handleComplete}/>

      </div>
          </Card>
        ))}
      </div>
      
      
    </div>
  );
};


export default Shop;
