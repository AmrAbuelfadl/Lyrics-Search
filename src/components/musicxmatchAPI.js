import axios from 'axios'

export const fetchTop10 = async (countryCode) => {
    // console.log("API CC", countryCode)
    return axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=${countryCode}&f_has_lyrics=1&apikey=${process.env.REACT_APP_MMAPI_KEY}`)
    .then(response => {
        // console.log("fetchTop10", response.data.message.body.track_list)
        const tracklist = response.data.message.body.track_list
        return tracklist 
    })
    .catch(error => console.log("Error", error))
}

export const fetchTrackLyrics = async (id) => {
    return axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${id}&apikey=${process.env.REACT_APP_MMAPI_KEY}`)
    .then(response => {
        const lyrics = response.data.message.body
        // console.log("lyrics", lyrics)
        return lyrics
    })
    .catch(error => console.log("Error", error))
}

export const fetchTrackInfo = async (id) => {
    return axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.get?track_id=${id}&apikey=${process.env.REACT_APP_MMAPI_KEY}`)
    .then(response => {
        const trackInfo = response.data.message.body.track
        // console.log("trackInfo", trackInfo)
        return trackInfo
    })
    .catch(error => console.log("Error", error))
}

export const fetchSpecificTrack = async (track) => {
    return axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.search?q_track=${track}&page=1&page_size=10&apikey=${process.env.REACT_APP_MMAPI_KEY}`)
    .then(response => {
        // console.log("fetchSpecificTrack", response.data.message.body.track_list)
        const tracklist = response.data.message.body.track_list
        return tracklist
    })
    .catch(error => console.log("Error", error))
}