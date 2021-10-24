import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Box } from '@material-ui/core';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Rating from '@mui/material/Rating';

import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles((theme) => ({
    main: {
        padding: '50px 0',
    },
    flex: {
        display: 'flex',
        paddingBottom: '30px',
    },
    img: {
        paddingRight: '15px',
    },
    btn: {
        background: 'gray',
        marginRight: '15px',
        padding: '7px 60px',
        textAlign: 'left',
    },
    indexBox: {
        margin: '30px 0',
    },
    infoBox: {
        marginTop: '40px',
        padding: theme.spacing(2),
    },
    flexBox: {
        display: 'flex',
        flex: 1,
        justifyContent: 'space-between',
    }
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel" hidden={value !== index}
            id={`simple-tabpannel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}>
            {value === index && (
                <Box sx={{ p: 4 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpannel-${index}`,
    };
}

export default function MasterProfile() {
    const classes = useStyles();

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.main}>
            <Box className={classes.flex}>
                <Box className={classes.img}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="100"
                            image="https://cdn.channel.io/plugin/images/unknown_user.jpg"
                            alt="profile img"
                        />
                    </Card>
                </Box>
                <Box>
                    <Typography variant="h5" gutterBottom component="div">해방플러스 (해충으로부터 해방!)</Typography>
                    <Typography variant="caption" display="block" >바퀴벌레 퇴치</Typography>
                    <Rating name="rating" precision={0.5} size="small" defaultValue={4.5} />
                </Box>
            </Box>


            <Box sx={{ width: '100%' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="마스터 정보" {...a11yProps(0)} />
                        <Tab label="사진/동영상" {...a11yProps(1)} />
                        <Tab label="리뷰" {...a11yProps(2)} />
                        <Tab label="질문답변" {...a11yProps(3)} />
                    </Tabs>
                </Box>

                <TabPanel value={value} index={0}>
                    <Box className={classes.infoBox}>
                        <Typography variant="h5" gutterBottom component="div" >한줄소개</Typography>
                        <Typography>Nostrud velit consectetur pariatur pariatur ad. Quis tempor in laboris deserunt laborum pariatur elit pariatur. Quis consequat aute magna cillum pariatur eu consequat sint duis elit velit. Nulla veniam consequat Lorem excepteur excepteur aliqua sit quis cupidatat proident magna.</Typography>
                    </Box>

                    <Box className={classes.flexBox}>
                        <Box className={classes.infoBox}>
                            <Typography variant="h5" gutterBottom component="div" >기본정보</Typography>
                            <Typography>정해진 형식이 있고 사용자(마스터)는 폼에 맞게 입력하는 형태-백?</Typography>
                        </Box>
                        <Box className={classes.infoBox}>
                            <Typography variant="h5" gutterBottom component="div" >추가정보</Typography>
                            <Typography>마찬가지</Typography>
                        </Box>
                    </Box>

                    <Box className={classes.infoBox}>
                        <Typography variant="h5" gutterBottom component="div" >제공 서비스</Typography>
                        <Typography>카테고리가 정해져있고 사용자(마스터)가 선택할 수 있음.</Typography>
                    </Box>

                    <Box className={classes.infoBox}>
                        <Typography variant="h5" gutterBottom component="div" >서비스 상세설명</Typography>
                        <Typography>더보기/접기 해야함.</Typography>
                    </Box>
                </TabPanel>




                <TabPanel value={value} index={1}>
                    사진/동영상
                </TabPanel>
                <TabPanel value={value} index={2}>
                    리뷰
                </TabPanel>
                <TabPanel value={value} index={3}>
                    질문답변
                </TabPanel>
            </Box>
        </div>
    );
}