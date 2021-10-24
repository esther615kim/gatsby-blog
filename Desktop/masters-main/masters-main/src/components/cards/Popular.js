import React from "react";
import Slider from "react-styled-carousel";
//import { makeStyles } from "@material-ui/core/styles";
import { popular } from "../../components/data.json";
import useStyles from "./styles";
import {
  Container,
  Box,
  Card,
  //oxCard,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core";
import "@fontsource/roboto";

const Cards = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box className={classes.boxContainer}>
        <h3 className={classes.title}>마스터즈 인기 서비스</h3>
        <Container className={classes.wrapper}>
          <Slider showDots={false} cardsToShow={3}>
            {popular.map((item, i) => {
              return (
                <Card key={i} className={classes.card}>
                  <CardMedia className={classes.media} image={item.url} />

                  <CardContent className={classes.text}>
                    <Typography variant="s">{item.title}</Typography>
                  </CardContent>
                </Card>
              );
            })}
          </Slider>
        </Container>
      </Box>
    </React.Fragment>
  );
};

export default Cards;
