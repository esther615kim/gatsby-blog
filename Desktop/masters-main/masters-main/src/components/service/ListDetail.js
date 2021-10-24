import useStyles from "../cards/styles";
import React from 'react'
import {
    List,
    ListItem,
    Typography
} from "@material-ui/core";


export default function ListDetail() {
    const classes = useStyles();
    return (
        <div>
            <ListItem style={{ paddingLeft: "25%" }} className={classes.serviceList}>
                <Typography gutterBottom variant="h6">이사</Typography>
                <Typography gutterBottom variant="subtitle">소형이사</Typography>
                <Typography gutterBottom variant="subtitle">용달/화물 운송</Typography>
                <Typography gutterBottom variant="subtitle">국내 이사</Typography>
                <Typography gutterBottom variant="subtitle">짐 보관</Typography>
            </ListItem>
        </div>
    )
}
