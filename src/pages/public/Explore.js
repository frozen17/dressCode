import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { Button } from "@mui/material";
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import Security from "../../components/Security";
import SimpleAccordion from "../../components/Accardion";
import ResponsiveDialog from "../../components/share/Share";
import IconButton from '@mui/material/IconButton';
import './Explore.css';



const fetchData = (id) => {
  return axios.get(`http://localhost:3004/items/${id}`).then((res) => res.data);
};

const Explore = (props) => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  console.log(post);

  useEffect(() => {
    fetchData(id).then((data) => setPost(data));
  }, [id]);

  const handleChangeColor = async (
    e,
    id,
    name,
    description,
    price,
    composition,
    url,
    urlOne,
    urlTwo,
    urlThree,
    urlFour,
    isBasket
  ) => {
    e.preventDefault();
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
      isLiked: 1,
    });

    fetchData(id).then((data) => setPost(data));
  };

  const handleRemoveColor = async (
    e,
    id,
    name,
    description,
    price,
    composition,
    url,
    urlOne,
    urlTwo,
    urlThree,
    urlFour,
    isBasket
  ) => {
    e.preventDefault();
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
      isLiked: 0,
    });

    fetchData(id).then((data) => setPost(data));
  };


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
      fetchData(id).then((data) => setPost(data));
      
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
    
    fetchData(id).then((data) => setPost(data));
  }

  return (
    <div>
      {post && (
        <div
          key={post.id}
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center"
          }}
        >
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-bs-ride="carousel"
            style={{
              width: "40%"
            }}
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={post.urlOne} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={post.urlTwo} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={post.url} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          <div
            style={{
              width: "40%"
            }}
          >
          <div style={{
            display :"flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
              <h3 style={{textAlign: "start", margin: "0"}}>DressCode</h3>
              <div style={{
                display: "flex",
                alignItems: "center"
              }}>
              <ResponsiveDialog/>
              {post.isLiked !== 1 ? (
                <IconButton aria-label="delete" size="large">
                <FavoriteBorderRoundedIcon
                titleAccess="Нравится"
                  onClick={(e) =>
                    handleChangeColor(
                      e,
                      post.id,
                      post.name,
                      post.description,
                      post.price,
                      post.composition,
                      post.url,
                      post.urlOne,
                      post.urlTwo,
                      post.urlThree,
                      post.urlFour,
                      post.isBasket
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
                      post.id,
                      post.name,
                      post.description,
                      post.price,
                      post.composition,
                      post.url,
                      post.urlOne,
                      post.urlTwo,
                      post.urlThree,
                      post.urlFour,
                      post.isBasket
                    )
                  } style={{color: "red"}} />
                      </IconButton>
              )}
              </div>             
            </div>
            <hr />
            <div>
              <h3 className="postName">{post.name}</h3>
              <p className="postPrice">Цена: {post.price}</p>
              <hr />
              <h4 className="descr-text">Описание: 
                </h4>
                <h4 className="description">{post.description}</h4>
                <hr />
                <div>
                  <h4 className="composition-text">Подробности: </h4>
                  <h4 className="composition">{post.composition}</h4>
                </div>
              <div className="btn-center">
              {post.isBasket ? 
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
                            post.id,
                            post.name,
                            post.description,
                            post.price,
                            post.composition,
                            post.url,
                            post.urlOne,
                            post.urlTwo,
                            post.urlThree,
                            post.urlFour,
                            post.isLiked
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
                            post.id,
                            post.name,
                            post.description,
                            post.price,
                            post.composition,
                            post.url,
                            post.urlOne,
                            post.urlTwo,
                            post.urlThree,
                            post.urlFour,
                            post.isLiked
                          )
                        }>
                        Добавить в корзину
                      </Button>)
                    }
              </div>
                 

              <hr />
              <SimpleAccordion/>
            </div>
          </div>
        </div>
      )}
      <Security/>
    </div>
  );
};

export default Explore;
