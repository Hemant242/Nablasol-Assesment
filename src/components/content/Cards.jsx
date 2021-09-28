import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import "../content/Cards.css";

const Cards = (props) => {
  return (
    <Card className='card' sx={{ maxWidth: 300 }}>
      <CardMedia
        component='img'
        height='260'
        image={props.img}
        alt='Card_img'></CardMedia>
      <CardContent>
        <Typography className="card-title" variant='h4' component='div'>
          {props.title}
        </Typography>
        <Typography className = "card-content" variant='body2' component='div'>
          {props.content}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Cards;
