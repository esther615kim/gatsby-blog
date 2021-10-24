import React from "react";
import Slider from "react-styled-carousel";
import { magazine } from "../../components/data.json";
import useStyles from "./styles";
import {
  Container,
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core";

const Magazine = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box className={classes.boxContainer}>
        <h3 className={classes.title}>매거진</h3>
        <p className={classes.title}>마스터즈를 100% 활용하는 팁</p>
        <Container className={classes.wrapper}>
          <Slider autoSlide={false} showDots={false} cardsToShow={3}>
            {magazine.map((item, i) => {
              return (
                <Card key={i} className={classes.card}>
                  <CardMedia className={classes.media} image={item.imageUri} />

                  <CardContent className={classes.text}>
                    <Typography variant="subtitle2">{item.title}</Typography>
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

export default Magazine;
