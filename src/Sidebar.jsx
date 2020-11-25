import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ScreenShareRoundedIcon from '@material-ui/icons/ScreenShareRounded';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Divider from '@material-ui/core/Divider';
import './style.css'
import { CHANNELS } from './CHANNELS'

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));

export default function Sidebar(props) {
    const classes = useStyles();
    const [whoClicked, setwhoClicked] = React.useState('Algemeen');

    const handleClick = (who) => {
        setwhoClicked(who);
        props.whoIsActive(who);
        props.notActivated(who === 'Algemeen' ? 'Cardiologie' : 'Algemeen')
    };

    return (

        <div className="sidebar">
            <Divider variant="middle" />
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        <h1>Publiciren</h1>
                    </ListSubheader>
                }
                className={classes.root}
            >
                <ListItem button>
                    <ListItemIcon>
                        <ScreenShareRoundedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Narrowcasting" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <ChevronRightIcon />
                    </ListItemIcon>
                    <ListItemText primary="algemeen" onClick={() => handleClick("Algemeen")} style={{ color: whoClicked == 'Algemeen' ? 'blue' : 'black' }} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <ChevronRightIcon />
                    </ListItemIcon>
                    <ListItemText primary="Cardiologie" onClick={() => handleClick("Cardiologie")} style={{ color: whoClicked == 'Cardiologie' ? 'blue' : 'black' }} />
                </ListItem>
            </List>
            <Divider variant="middle" />
        </div>
    );
}

