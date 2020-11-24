import React from 'react';
import './style.css'
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        maxHeight: 345
    },
    media: {
        height: 250,
    }
});


export const Slide = (props) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.media}
                image={props.img}
                title={props.duration + ' min'}
            />
            <CardContent>
                <p>{props.name}</p>


            </CardContent>
        </Card>


    )
}