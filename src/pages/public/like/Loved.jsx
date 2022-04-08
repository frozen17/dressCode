import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Share from '../../../components/share/Share'
import { useParams, Link } from "react-router-dom";
import { Card } from '@mui/material';
import CardMedia from "@mui/material/CardMedia";
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Liked from './liked/Liked'



const fetchData = () => {
    return axios
      .get(`http://localhost:3004/items`)
      .then((response) => response.data);
  };

const Loved = (props) => {

    const { id } = useParams();
    const [likes, setLikes ] = useState([])



    useEffect(() => {
        fetchData(id).then((data) => setLikes(data));
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
          fetchData(id).then((data) => setLikes(data));
          
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
        
        fetchData(id).then((data) => setLikes(data));
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
  
  fetchData(id).then((data) => setLikes(data));
}



    return (
        <div>
          <div style={{textAlign: "center"}}>
            <h3>Список желаний</h3>
                <h5 style={{
                  fontSize: ".875rem",
                  letterSpacing: ".025rem",
                  color: "#181818",
                  fontFamily: "AktivGrotesk-Regular",
                  margin: "20px 0"
                }}>Сохраняйте до 50 товаров в списке желаний, чтобы отслеживать их наличие и добавлять в корзину в любое время.</h5>
               <p style={{
                  fontFamily: "AktivGrotesk-Regular",
                  lineHeight: "1.3",
                }}>В ВАШЕМ СПИСКЕ ЖЕЛАНИЙ СОХРАНЕНЫ {likes.filter(like => like.isLiked !== 1).map(like => (
                  like.length
                ))} ТОВАРЫ.</p>
          </div>
          
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "space-around",
            }}>
                
            
            {likes.filter(like => like.isLiked === 1).map((like) => {
                return (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-around",
                    }}
                  >
                     
                    <Card
                      key={like.id}
                      sx={{
                        width: 370,
                        overflow: "hidden",
                        marginBottom: "40px",
                      }}
                    >
                      <IconButton aria-label="delete" size="large">
                        <FavoriteIcon onClick={(e) =>
                    handleRemoveColor(
                      e,
                      like.id,
                      like.name,
                      like.description,
                      like.price,
                      like.composition,
                      like.url,
                      like.urlOne,
                      like.urlTwo,
                      like.urlThree,
                      like.urlFour,
                      like.isBasket
                    )
                  } style={{color: "red"}} fontSize="inherit" />
                      </IconButton>

                      <CardMedia
                        className="shopImg"
                        component="img"
                        height="460"
                        image={like.urlOne}
                        alt="wait pls"
                      />
                      <div style={{
                        padding: "10px 10px"
                      }}>
                        <Typography>{like.name}</Typography>
                      <Typography>Цена: {like.price}</Typography>
                      </div>
                      {like.isBasket ? 
                      (<Button
                        style={{
                          backgroundColor: "black",
                          color: "white",
                          display: "flex",
                          margin: "15px auto",
                          width: "80%",
                        }}
                        onClick={(e) =>
                          handleNoneComplete(
                            e,
                            like.id,
                            like.name,
                            like.description,
                            like.price,
                            like.composition,
                            like.url,
                            like.urlOne,
                            like.urlTwo,
                            like.urlThree,
                            like.urlFour,
                            like.isLiked
                          )
                        }>
                        Удалить из корзины
                      </Button>)
                        :
                      (<Button
                        style={{
                          backgroundColor: "black",
                          color: "white",
                          display: "flex",
                          margin: "15px auto",
                          width: "80%",
                        }}
                        onClick={(e) =>
                          handleComplete(
                            e,
                            like.id,
                            like.name,
                            like.description,
                            like.price,
                            like.composition,
                            like.url,
                            like.urlOne,
                            like.urlTwo,
                            like.urlThree,
                            like.urlFour,
                            like.isLiked
                          )
                        }>
                        Добавить в корзину
                      </Button>)
                    }
                      
                      <div style={{display: "none"}}>
                        <Liked like={like}/>
                      </div>
                    </Card>
                  </div>
                );
            })}            
            </div>
        </div>
    );
};

export default Loved;