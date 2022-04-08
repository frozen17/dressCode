import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import deliver from "../../images/deliver.jpg";
import laptop from "../../images/laptop.jpg";
import LatestNews from "../../modal/LatestNews/LatestNewsModal";
import DeliverNews from "../../modal/LatestNews/DeliverNews";
import OpenNews from "../../modal/LatestNews/OpenNews";
import Share from "../share/Share";
import opened from "../../images/opened.jpg";
import "./Latest.css";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import Checkbox from "@mui/material/Checkbox";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Latest = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <h3
        style={{
          textAlign: "center",
          fontFamily: "AktivGrotesk-Regular",
          fontSize: "1.625rem",
          letterSpacing: ".25rem",
          lineHeight: "1.2",
        }}
      >
        Последние новости
      </h3>
      <div
        style={{
          width: "80%",
          margin: "50px auto",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div className="Card">
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              component="img"
              height="200"
              image={deliver}
              alt="Paella dish"
            />

            <CardContent
              style={{
                padding: "10px 10px",
              }}
            >
              <Typography variant="body2" color="text.secondary">
                8 июня 2021
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <LatestNews />
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Важные моменты при отправке посылок в Россию
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <Checkbox
                  {...label}
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite />}
                />
              </IconButton>
              <Share />
            </CardActions>
          </Card>
        </div>
        <div className="Card">
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              component="img"
              height="200"
              image={laptop}
              alt="Paella dish"
            />

            <CardContent
              style={{
                padding: "10px 10px",
              }}
            >
              <Typography variant="body2" color="text.secondary">
                20 мая 2021
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <DeliverNews />
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Мы доставляем товары по СНГ. Из любых интернет-магазинов
                Бишкека.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
              <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
              </IconButton>
              <Share />
            </CardActions>
          </Card>
        </div>
        <div className="Card">
          <Card sx={{ maxWidth: 300 }}>
            <CardMedia
              component="img"
              height="200"
              image={opened}
              alt="Paella dish"
            />

            <CardContent
              style={{
                padding: "10px 10px",
              }}
            >
              <Typography variant="body2" color="text.secondary">
                20 мая 2021
              </Typography>
              <Typography variant="body2" color="text.secondary">
                <OpenNews />
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Мы доставляем товары по СНГ. Из любых интернет-магазинов
                Бишкека.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
              <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
              </IconButton>

              <Share />
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Latest;
