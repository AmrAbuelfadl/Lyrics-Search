import React, {useState, useEffect} from 'react'
import styles from './LyricsPage.module.css'
import {fetchTrackLyrics, fetchTrackInfo} from '../musicxmatchAPI'
import { Card, CardContent, Typography, Button, Paper } from '@material-ui/core'
import spinnerGIF from '../../images/spinner.gif'

const LyricsPage = ({match}) => {
    const[lyrics, setLyrics] = useState({})
    const[trackInfo, setTrackInfo] = useState({})

    useEffect(()=>{
        const fetchData = async () => {
            setLyrics(await fetchTrackLyrics(match.params.id))
            setTrackInfo(await fetchTrackInfo(match.params.id))
        }
        fetchData()
    }, [])
    return (
    //    lyrics&trackInfo? 
    <React.Fragment>
        {((Object.keys(trackInfo).length!==0 & Object.keys(lyrics).length!==0))  ?
            (<Card className={styles.card}> 
                <CardContent>
                    <Typography align='center' variant='subtitle1'><i className="fas fa-compact-disc"></i> Album: {trackInfo.album_name}</Typography>
                    <Typography align='center' variant='subtitle1'><i className="fas fa-microphone"></i> Artist: {trackInfo.artist_name}</Typography>
                    <Typography align='center' variant='subtitle1'><i className="far fa-play-circle"></i> Track: {trackInfo.track_name}</Typography>
                    <Typography align='center' variant='subtitle1'><i className="fas fa-calendar-week"></i> Release Date: { new Date(trackInfo.updated_time).toDateString()}</Typography>
                    <Typography align='center' variant='subtitle1'> <i className="fas fa-eye-slash"></i> No Explicit words: { trackInfo.explicit === 0? <i className="fas fa-thumbs-up"></i>: <i className="fas fa-thumbs-down"></i>}</Typography>
                    <Typography align='center' variant='subtitle1'><i className="fas fa-star"></i> Rating: {trackInfo.track_rating}</Typography>
                    <br/>
                    <Typography align='center' variant="h5">Lyrics</Typography>
                    <br/>
                    <Typography align='center' variant="h6">{lyrics.lyrics.lyrics_body}</Typography>
                </CardContent>
            </Card>
        )
        :  (<img src={spinnerGIF} alt= 'loading....' className={styles.spinner}></img>)
        }
    </React.Fragment>
    )
}

export default LyricsPage
