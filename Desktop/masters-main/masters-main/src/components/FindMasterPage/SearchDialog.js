import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 300,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));


export default function SearachDialog(props) {

    const classes = useStyles();

    const { onClose, selectedValue } = props;

    const [open, setOpen] = React.useState(false);
    
    const handleClose = () => {
        onClose(selectedValue);
    };
    
    const handleListItemClick = (value) => {
        onClose(value);
    };

    const handleClick = () => {
        setOpen(!open);
    };


    return (
    <div>
        <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
            <ListSubheader component="div" id="nested-list-subheader">
                지역 선택
            </ListSubheader>
        }
        className={classes.root}
        >

        <ListItem button>
        <ListItemText primary="전국" />
        </ListItem>

        <ListItem button onClick={handleClick}>
        <ListItemText primary="서울" />
        {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
            <ListItemIcon>
                <StarBorder />
            </ListItemIcon>
            <ListItemText primary="서울 전체" />
            </ListItem>

            <ListItem button className={classes.nested}>
            <ListItemIcon>
                <StarBorder />
            </ListItemIcon>
            <ListItemText primary="강북구" />
            </ListItem>
        </List>
        </Collapse>



        <ListItem button onClick={handleClick}>
        <ListItemText primary="인천" />
        {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
            <ListItemIcon>
                <StarBorder />
            </ListItemIcon>
            <ListItemText primary="인천 전체" />
            </ListItem>

            <ListItem button className={classes.nested}>
            <ListItemIcon>
                <StarBorder />
            </ListItemIcon>
            <ListItemText primary="계양구" />
            </ListItem>
        </List>
        </Collapse>



        <ListItem button onClick={handleClick}>
        <ListItemText primary="경기" />
        {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>

        <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            <ListItem button className={classes.nested}>
            <ListItemIcon>
                <StarBorder />
            </ListItemIcon>
            <ListItemText primary="경기 전체" />
            </ListItem>

            <ListItem button className={classes.nested}>
            <ListItemIcon>
                <StarBorder />
            </ListItemIcon>
            <ListItemText primary="김포시" />
            </ListItem>
        </List>
        </Collapse>
    </List>
    </div>
    );
}
