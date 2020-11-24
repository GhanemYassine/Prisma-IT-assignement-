import React from 'react';
import './style.css'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import Divider from '@material-ui/core/Divider';
import { Slide } from './Slide';
import { CHANNELS } from './CHANNELS';
import Grid from '@material-ui/core/Grid';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        maxHeight: 345
    },
    media: {
        height: 250
    }
});
const Content = (props) => {
    const classes = useStyles();

    return (


        <div className="content">
            <h4>Totale duur: {CHANNELS[props.whosIsActive].slides.reduce((acc, curr) => acc + curr.duration, 0)} m</h4>
            <div className="rightside">
                <p style={{ marginLeft: '0.5rem' }}>  <PlayCircleOutlineIcon /> <span style={{ marginTop: '-2.5rem' }}>Preview the entire channel</span></p>
            </div>
            <Divider />
            <h1 style={{ color: '#FF007F' }}> - {props.whosIsActive}</h1>
            <p> {CHANNELS[props.whosIsActive].slides.reduce((acc, curr) => acc + curr.duration, 0)} m</p>
            <Divider />
            <br></br>
            <div>


                <Grid container spacing={3}>
                    {CHANNELS[props.whosIsActive].slides.map(slide => {
                        return (
                            <Grid item xs={3}>
                                <Slide name={slide.name} img={slide.img} duration={slide.duration} />
                            </Grid>
                        )
                    })}
                    <Grid item xs={3}>
                        <Card>
                            <CardMedia
                                className={classes.media}
                                image='https://www.icone-png.com/png/30/29947.png'
                            />
                            <CardContent>
                                <p>  Add another picture</p>
                            </CardContent>

                        </Card>
                    </Grid>


                </Grid>



            </div>
            <Divider />

        </div >



    )
}

export default Content;