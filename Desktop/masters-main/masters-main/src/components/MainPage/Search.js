import React from 'react';
import CategoryCards from './Category/CategoryCards.js'
import { alpha, makeStyles } from '@material-ui/core/styles';
import { Box, Button, Typography, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    boxContainer: {
        marginLeft: "30%",
        marginRight: "30%",
        position: "relative",
        maxWidth: 1000,
        height: 320,
        padding: 30,
        textAlign: "left"
    },
    findBtn: {
        fontWeight: "bold",
    },
    text: {
        flexGrow: 1,
        fontWeight: "bold",
        padding: '15px 0',
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.black, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        border: 1,
        width: '400px',
    },
    searchIcon: {
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: '10px 0',
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),

    },
}));

export default function Search() {
    const classes = useStyles();
    return (
        <Box className={classes.boxContainer}>
            <div>
                <Button className={classes.findBtn}>서비스 찾기</Button>
                <Button className={classes.findBtn}>고객 찾기</Button>
            </div>
            <Typography variant="h4" className={classes.text}>
                1분 만에<br></br>마스터를 찾아드려요
            </Typography>

            {/* Search */}
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder="서비스를 검색하세요"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                />
            </div>
            <CategoryCards />

        </Box>
    );
}
