import React from "react";
import Slider from "react-styled-carousel";

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

const ServiceCard = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Box className={classes.boxContainer}>

                <Container className={classes.serviceCardBox}>

                    {popular.map((item, i) => {
                        return (
                            <Card key={i} style={{ width: 320, margin: 10 }}>
                                <CardMedia className={classes.media} image={item.url} />

                                <CardContent className={classes.text}>
                                    <Typography variant="s">{item.title}</Typography>
                                </CardContent>
                            </Card>
                        );
                    })}
                </Container>
            </Box>
        </React.Fragment>
    );
};

export default ServiceCard;
