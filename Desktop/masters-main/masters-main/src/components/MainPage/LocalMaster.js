import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme)=>({
    root: { 
        padding: theme.spacing(3),
        background: '#ffe9de',
        marginRight: theme.spacing(13),
        marginTop: '100px',
        marginLeft: "26%",
        marginRight: "26%",
        width: "1100",
    },
    title: { 
        fontWeight: "bold",
    },
    text: {
        flexGrow: 1,
        padding: '15px 0',
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.primary,
    },
}));

export default function LocalMaster(){
    const classes = useStyles();

    function FormRow(){
        return (
            <React.Fragment>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>서울</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>경기</Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper}>인천</Paper>
                </Grid>
            </React.Fragment>
        );
    }
    return (
        <div className={classes.root}>
            <Typography variant="h6" className={classes.title}>전국 지역별 마스터즈</Typography>
            <Typography className={classes.text}>
                믿을 수 있는 전문가를 더 마스터, 단 한 곳에서 찾으세요.
            </Typography>

            <Grid container spacing={1}>
                <Grid container item xs={12} spacing={1}>
                    <FormRow />
                    <FormRow />
                    <FormRow />
                    <FormRow />
                </Grid>
                <Grid container item xs={12} spacing={1}>
                    <FormRow />

                </Grid>
                <Grid container item xs={12} spacing={1}>
                    <FormRow />
                </Grid>
            </Grid>
        </div>
    );
}
