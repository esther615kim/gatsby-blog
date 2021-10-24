import React from "react";
import Slider from "react-styled-carousel";
import { local_masters } from "../../components/data.json";
import {
  Container,
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core";
import "@fontsource/roboto";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  boxContainer: {
    margin: "0 auto",
    position: "relative",
    maxWidth: 1000,
    height: 320,
    padding: 5,
    textAlign: "left"
  },
  title: {
    marginLeft: 45,
    marginBottom: 5,
    textAlign: "left"
  },
  viewAll: {
    position: "absolute",
    right: 60,
    top: 30
  },
  root: {
    maxWidth: 350,
    height: 200,
    marginRight: 12
  },
  media: {
    height: 40,
    paddingTop: "40%" //16:9 비율이래
  },
  text: {
    paddingTop: 20,
    alignItems: "left"
  },
  card: {
    maxWidth: 250,
    height: 210,
    margin: 3,
    position: "relative",
    marginRight: 10
  },
  smallImage: {
    background: "#212121",
    width: 40,
    height: 40,
    zIndex: 1,
    position: "absolute",
    border: "2px solid #fff",
    borderRadius: "50%",
    top: 65,
    left: 10
  }
});

const Hidden = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box className={classes.boxContainer}>
        <h3 className={classes.title}>지역 서비스</h3>
        <Typography color="textSecondary" className={classes.viewAll}>
          전체보기
        </Typography>
        <Container className={classes.wrapper}>
          <Slider autoSlide={false} showDots={false} cardsToShow={4}>
            {local_masters.map((item, i) => {
              return (
                <Card key={i} className={classes.card}>
                  <CardMedia className={classes.media} image={item.imageUri} />
                  <CardMedia
                    className={classes.smallImage}
                    image={item.imageUri}
                  />
                  <CardContent className={classes.text}>
                    <Typography fontWeight={600} variant="subtitle2">
                      {item.title}
                    </Typography>
                    <Typography color="textSecondary" variant="subtitle2">
                      {item.address}
                    </Typography>
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

export default Hidden;
