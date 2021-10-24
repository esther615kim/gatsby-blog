import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Button, Box, Typography } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    appbar: {
        background: 'none',
    },
    masterbtn: {
        background: 'linear-gradient(45deg, #F79489 30%, #FF8E53 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        height: 40,
        padding: '0 20px',
        margin: '0 10px',
        fontWeight: "bold",
    },
    link: {
        color: 'inherit',
        textDecoration: 'inherit',
    },
    btnBox: {
        display: 'flex',
        flex: 1,
        justifyContent: 'flex-end',
    }
}));

export default function Header() {

    const classes = useStyles();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar className={classes.appbar} position="static">
                <Toolbar>
                    <Link to="/" className={classes.link}>
                        <img
                            alt="Main Logo"
                            src="https://i.ibb.co/MnHLzqJ/2.png"
                            width="140"
                            height="70"
                        />
                    </Link>

                    <Box className={classes.btnBox}>
                        <Button className={classes.masterbtn}>Master Signup</Button>
                        <Link className={classes.link}>
                            <Button>Sign Up</Button>
                        </Link>
                        <Link to="/findmaster" className={classes.link}>
                            <Button>Find Master</Button>
                        </Link>
                        <Link className={classes.link}>
                            <Button>Login</Button>
                        </Link>

                    </Box>

                </Toolbar>
            </AppBar>
        </Box>
    );
}