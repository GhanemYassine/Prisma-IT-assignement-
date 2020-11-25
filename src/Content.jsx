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
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';

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
            <h4>Totale duur: {CHANNELS[props.whosIsActive].slides.reduce((acc, curr) => acc + curr.duration, 0)} min</h4>
            <div className="rightside">
                <p style={{ marginLeft: '0.5rem' }}>  <PlayCircleOutlineIcon /> <span style={{ marginBottom: '5px' }}>Preview Channel</span></p>
                <p style={{ marginLeft: '0.5rem' }}>  <AddCircleOutlineIcon /> <span style={{ marginTop: '-2.5rem' }}> Add Channel</span></p>

            </div>
            <Divider />
            <h1 style={{ color: '#FF007F' }}> - {props.whosIsActive}</h1>
            <p> {CHANNELS[props.whosIsActive].slides.reduce((acc, curr) => acc + curr.duration, 0)} min</p>
            <div className="right_side_inside">
                <EditIcon />
                <DeleteIcon />
                <VisibilityIcon />
                <p style={{ marginLeft: '0.5rem' }}>  <CloudUploadIcon /> <span style={{ marginTop: '5px' }}> Publish</span></p>
            </div>

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
            <div className="Content">
                <h1 style={{ color: '#FF007F' }}> - {props.whosIsActive}</h1>
                <p> {CHANNELS[props.whosIsActive].slides.reduce((acc, curr) => acc + curr.duration, 0)} min</p>
                <div className="right_side_two_inside">
                    <EditIcon />
                    <DeleteIcon />
                    <VisibilityIcon />
                    <p style={{ marginLeft: '0.5rem' }}>  <CloudUploadIcon /> <span style={{ marginTop: '5px' }}> Publish</span></p>
                </div>
            </div>
            <Divider />
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

        </div >



    )
}

export default Content;