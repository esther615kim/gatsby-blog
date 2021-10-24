import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { find_masters } from "../../components/data.json";
import { Container, Box, Paper, Typography } from "@material-ui/core";
import "@fontsource/roboto";


const FindCard = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container className={classes.boxContainer}>
        <h5 className={classes.sorting}>리뷰순</h5>
        <h5 className={classes.title}>2392명의 고수</h5>

        <Box className={classes.wrapper}>
          {/* 카드 */}
          <div variant="outlined">
            <img
              className={classes.image}
              src="https://static.cdn.soomgo.com/upload/profile/206d790b-69ea-4f5c-9621-0efae5e494bc.jpg?d=320x320"
            />
          </div>

          <div className={classes.textBox}>
            <Typography fontWeight="bold" variant="s">
              지용득
            </Typography>
            <Typography variant="s">
              지용득 고수의 에어컨 청소 서비스
            </Typography>
          </div>
        </Box>
        {/* 카드 */}
        <Box className={classes.wrapper}>
          <div variant="outlined">
            <img
              className={classes.image}
              src="https://static.cdn.soomgo.com/upload/profile/ef8113b4-96bc-435d-9228-783fa169abf1.jpg?d=320x320"
            />
          </div>

          <div className={classes.textBox}>
            <Typography fontWeight="bold" variant="s">
              디자인줄눈
            </Typography>
            <Typography variant="s">줄눈시공 전문업체입니다.</Typography>
          </div>
        </Box>
      </Container>
    </React.Fragment>
  );
};

export default FindCard;
