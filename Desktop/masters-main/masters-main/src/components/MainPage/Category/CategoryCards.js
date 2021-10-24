import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Box, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

// icons
import MenuBookOutlinedIcon from '@material-ui/icons/MenuBookOutlined';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SupervisorAccountOutlinedIcon from '@material-ui/icons/SupervisorAccountOutlined';
import BusinessCenterOutlinedIcon from '@material-ui/icons/BusinessCenterOutlined';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import LocalHospitalOutlinedIcon from '@material-ui/icons/LocalHospitalOutlined';
import CategoryOutlinedIcon from '@material-ui/icons/CategoryOutlined';
import CheckBoxOutlineBlankOutlinedIcon from '@material-ui/icons/CheckBoxOutlineBlankOutlined';

const useStyles = makeStyles((theme) => ({
    grid: {
        margin: '30px 0',
    },
    card: {
        minWidth: 120,
        margin: '10px 10px',
    },
    left: {
        display: "flex",
        // position: "relation",
        // flex: "0 0 50%",
    },
}));

export default function CategoryCards() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.left}>
                <Grid className={classes.grid} container spacing={3} item xs={8}>
                    {/* 1 */}
                    <Card className={classes.card}>
                        <CardActionArea>
                            <Box textAlign="center" m={1}>
                                <MenuBookOutlinedIcon color="action" fontSize="large" />
                            </Box>
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom component="div"></Typography>
                            <Box textAlign="center">레슨</Box>
                        </CardContent>
                    </Card>

                    {/* 2 */}
                    <Card className={classes.card}>
                        <CardActionArea>
                            <Box textAlign="center" m={1}>
                                <HomeOutlinedIcon color="action" fontSize="large" />
                            </Box>
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom component="div"></Typography>
                            <Box textAlign="center">홈/리빙</Box>
                        </CardContent>
                    </Card>

                    {/* 3 */}
                    <Card className={classes.card}>
                        <CardActionArea>
                            <Box textAlign="center" m={1}>
                                <SupervisorAccountOutlinedIcon color="action" fontSize="large" />
                            </Box>
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom component="div"></Typography>
                            <Box textAlign="center">이벤트</Box>
                        </CardContent>
                    </Card>

                    {/* 4 */}
                    <Card className={classes.card}>
                        <CardActionArea>
                            <Box textAlign="center" m={1}>
                                <BusinessCenterOutlinedIcon color="action" fontSize="large" />
                            </Box>
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom component="div"></Typography>
                            <Box textAlign="center">비즈니스</Box>
                        </CardContent>
                    </Card>

                    {/* 5 */}
                    <Card className={classes.card}>
                        <CardActionArea>
                            <Box textAlign="center" m={1}>
                                <DesignServicesIcon color="action" fontSize="large" />
                            </Box>
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom component="div"></Typography>
                            <Box textAlign="center">디자인/개발</Box>
                        </CardContent>
                    </Card>

                    {/* 6 */}
                    <Card className={classes.card}>
                        <CardActionArea>
                            <Box textAlign="center" m={1}>
                                <LocalHospitalOutlinedIcon color="action" fontSize="large" />
                            </Box>
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom component="div"></Typography>
                            <Box textAlign="center">건강/미용</Box>
                        </CardContent>
                    </Card>

                    {/* 7 */}
                    <Card className={classes.card}>
                        <CardActionArea>
                            <Box textAlign="center" m={1}>
                                <CategoryOutlinedIcon color="action" fontSize="large" />
                            </Box>
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom component="div"></Typography>
                            <Box textAlign="center">알바</Box>
                        </CardContent>
                    </Card>

                    {/* 8 */}
                    <Card className={classes.card}>
                        <CardActionArea>
                            <Box textAlign="center" m={1}>
                                <CheckBoxOutlineBlankOutlinedIcon color="action" fontSize="large" />
                            </Box>
                        </CardActionArea>
                        <CardContent>
                            <Typography gutterBottom component="div"></Typography>
                            <Box textAlign="center">기타</Box>
                        </CardContent>
                    </Card>
                </Grid>                      
                <img src="https://i.ibb.co/RHDVjTb/autopicture1.png" width="330px" height="400px" />
            </div>
        </div>
    );
}