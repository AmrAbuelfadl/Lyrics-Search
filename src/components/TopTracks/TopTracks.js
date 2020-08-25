import React, {useState, useEffect} from 'react'
import spinnerGIF from '../../images/spinner.gif'
import styles from './TopTracks.module.css'
import Track from '../Track/Track'
import {fetchTop10, fetchSpecificTrack} from '../musicxmatchAPI'
import Search from '../Search/Search'
import {NativeSelect, FormControl, ButtonGroup, Button} from '@material-ui/core'

function TopTracks(props) {
    const [tracksList, setTracksList] = useState([])
    const [heading, setHeading] = useState("")
    const [CountryCode, setCountryCode] = useState("EG")
    const [Country, setCountry] = useState("Egypt")
    const [event, setEvent] = useState(null)

    const countriesCode = ["EG", "US", "FR", "MA", "ES", "AE", "GB", "TN", "SA", "IT"]
    const countries = ["Egypt", "UnitedStates", "France", "Morroco", "Spain", "Emirates", "Britain", "Tunisia", "Saudi Arabia", "Italy"]
    useEffect(()=>{
        const fetchData = async () => {
            setTracksList(await fetchTop10(CountryCode))
            setHeading(`Top 10 Tracks in ${Country}`)

        }
        fetchData()
    }, [])


    useEffect(()=>{
        const fetchData = async () => {
            setTracksList(await fetchSpecificTrack(props.searchTerm))
            setHeading("Search Results")
        }

        const clearSearch = () => {
            props.clearSearchTerm(true)
        }

        if(props.searchTerm !== ''){
            fetchData()
            clearSearch()
        }
        // console.log("useEffect", props.searchTerm) 
    }, [props.searchTerm])


//     const submitHandler = async (searchTerm, event) => {
//         event.preventDefault()
//         const data = await fetchSpecificTrack(searchTerm)
//         setTracksList(data)
//         setHeading("Search Results")
//   }
    return (
        <div>
            {/* <Search  submitHandler={submitHandler}/> */}
            <h3 align='center' className={styles.heading}>{heading}</h3>
            <div align='center'> 
                <h4>Choose Country</h4>
                <form onSubmit={ async ()=> {
                    event.preventDefault()
                    setTracksList(await fetchTop10(CountryCode))
                    setHeading(`Top 10 Tracks in ${Country}`)
                    // console.log("New TOP 10", tracksList)
                }}>
                    <select  defaultValue = "EG" onChange={(event)=>{
                        setEvent(event)
                        var index = event.nativeEvent.target.selectedIndex
                        // console.log(index)
                        setCountryCode(event.target.value)
                        setCountry(countries[index])
                        }}>
                        {countriesCode.map((countryCode, i) => (<option key={i} value={countryCode} > {countries[i]} </option>))}
                    </select>
                    <Button type="submit">Submit</Button>
                </form>
            </div>
            {
                tracksList.length !== 0? (
                    <div className={styles.results}>
                        
                        {
                            tracksList.map((track) => {
                                return <Track track={track.track} key={track.track.track_id}/>
                            })  
                        }

                    </div>
                )
                :  (<img src={spinnerGIF} alt= 'loading....' className={styles.spinner}></img>)
                
            }
        </div>
    )
}

export default TopTracks
