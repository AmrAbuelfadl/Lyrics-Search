import React, {useState, useEffect} from 'react'
import { Card, CardContent, Typography, Button } from '@material-ui/core'
import styles from './Track.module.css'
import {Link} from 'react-router-dom'
function Track(props) {
    const[track, setTrack] = useState({})
    useEffect(()=>{
        setTrack(props.track)
    }, [props.track, track])
    return (
        <Card className={styles.card} > 
            <CardContent>
                <Typography align='center' variant="h5"><i className="fas fa-microphone"></i>  Artist: {track.artist_name} </Typography>
                <Typography align='center' variant='subtitle1'><i className="far fa-play-circle"></i> Track: {track.track_name} </Typography>
                <Typography align='center' variant='subtitle1'><i className="fas fa-compact-disc"></i> Album: {track.album_name} </Typography>
                <br/>
                <Link to={`/track/${track.track_id}`}>
                    <Button className={styles.btnView} variant="contained" color="primary"><i className="fas fa-eye"></i>  View lyrics</Button>
                </Link>
            </CardContent>
        </Card>
    )
}

export default Track
