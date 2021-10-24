import React from "react";
import Slider from "react-styled-carousel";
import { tips } from "../../components/data.json";
import { Container, Box } from "@material-ui/core";
import { Card, CardContent, CardMedia, Typography } from "@material-ui/core";
import "@fontsource/roboto";
import useStyles from "./styles";

const Tips = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box className={classes.boxContainer}>
        <h3 className={classes.title}>고수의 노하우</h3>
        <Typography color="textSecondary" className={classes.viewAll}>
          전체보기
        </Typography>
        <Container className={classes.wrapper}>
          <Slider showDots={false} cardsToShow={3}>
            {tips.map((item, i) => {
              return (
                <Card key={i} className={classes.card}>
                  <CardMedia className={classes.media} image={item.imageUri} />

                  <CardContent className={classes.text}>
                    <Typography fontWeight={600} variant="subtitle2">
                      {item.title}
                    </Typography>
                    <Typography color="textSecondary" variant="subtitle2">
                      {item.master}
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

export default Tips;
