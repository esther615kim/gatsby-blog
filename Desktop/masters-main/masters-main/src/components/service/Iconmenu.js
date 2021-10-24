import React from 'react';
import useStyles from "../cards/styles";
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import AccountTreeRoundedIcon from '@mui/icons-material/AccountTreeRounded';
import AddReactionRoundedIcon from '@mui/icons-material/AddReactionRounded';
import AllInclusiveRoundedIcon from '@mui/icons-material/AllInclusiveRounded';
import ApartmentRoundedIcon from '@mui/icons-material/ApartmentRounded';
import Stack from '@mui/material/Stack';
import {
    IconButton,
    Typography
} from "@material-ui/core";



function IconMenu() {
    const classes = useStyles();
    return (
        <div>
            <Stack className={classes.stack} direction="row" spacing={2}>

                <IconButton size="large">
                    <AccessibilityNewIcon />
                    <Typography variant="overline">레슨</Typography>
                </IconButton>


                <IconButton size="large" >
                    <ApartmentRoundedIcon />
                    <Typography variant="overline">홈/리빙</Typography>
                </IconButton>

                <IconButton size="large">
                    <AccountTreeRoundedIcon />
                    <Typography variant="overline">이벤트</Typography>
                </IconButton>

                <IconButton size="large">
                    <AutoFixHighRoundedIcon />
                    <Typography variant="overline">비지니스</Typography>
                </IconButton>


                <IconButton size="large">
                    <AddReactionRoundedIcon />
                    <Typography variant="overline">알바</Typography>
                </IconButton>
                <IconButton size="large" >
                    <AllInclusiveRoundedIcon />
                    <Typography variant="overline">건강/미용</Typography>
                </IconButton>


            </Stack>
        </div>
    )
}

export default IconMenu;