import React, {useState, useEffect} from 'react'
import {fetchSpecificTrack} from '../musicxmatchAPI'
import {Paper, TextField} from '@material-ui/core'
import styles from './Search.module.css'
function Search(props) {

    const [tracksList, setTracksList] = useState([])
    const [heading, setHeading] = useState("Search Results")
    const [term, setTerm] = useState(null)
    const [event, setEvent] = useState(false)

    const changehandler = (event) => {
        setTerm(event.target.value)
        setEvent(event)
       
    }
    return (
        <div className={styles.search}>
            <form onSubmit = {() => props.submitHandler(term, event)}>
                <TextField autoFocus={true} fullWidth={true} variant='outlined' label='Search' onChange={changehandler}/>
            </form>
        </div>
    )
}

export default Search
