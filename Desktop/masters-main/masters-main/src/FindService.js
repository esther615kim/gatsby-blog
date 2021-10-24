import React from 'react';
import useStyles from "./components/cards/styles";
import ServiceCard from "./components/cards/ServiceCard";
import SearchIcon from '@mui/icons-material/Search';
import IconMenu from "./components/service/Iconmenu";
import {
    Box,
    Button,
    List,
    TextField,
    ButtonGroup,
    Typography
} from "@material-ui/core";

import ListDetail from "./components/service/ListDetail";

export default function FindService() {

    const classes = useStyles();
    return (

        <>
            <Box className={classes.topSearchBox}>
                <Typography className={classes.mainTitle} variant="h5">Business</Typography>
                <Typography gutterBottom variant="subtitle2">Start your business with Masters now.</Typography>
                <ButtonGroup margin="normal" >
                    <TextField size="small" sx={{ bt: 5 }} variant="outlined" />
                    <Button variant="contained" className={classes.SearchBtn}>
                        <SearchIcon />Search
                    </Button>
                </ButtonGroup>
            </Box>

            <IconMenu sx={{ mt: 10 }} />
            <Box className={classes.textBox}>
                <Typography className={classes.mainTitle} variant="h5">Popular services</Typography>
                <ServiceCard />

            </Box>

            <Box className={classes.textBox}>
                <Typography className={classes.mainTitle} variant="h5">All categories</Typography>
            </Box>

            <List>
                <ListDetail />
            </List>


        </>
    )
}