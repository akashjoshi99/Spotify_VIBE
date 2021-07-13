import React, { useState,useEffect } from "react"
import './App.css'
import Login from "./Login"
import { getTokenUrl } from "./spotify"
import { useDataLayerValue } from "./DataLayer"
import SpotifWebApi from "spotify-web-api-js"
import Player from "./Player"



const spotify = new SpotifWebApi()

function App() {
  const [{search, playlists, discover_weekly, myPlaylists, user, token}, dispatch] = useDataLayerValue()  //for pulling data from datalayer




  useEffect(() => {
    const hash = getTokenUrl() // this hash variable give the complete string after # in the url as object
    window.location.hash =""
    const _token = hash.access_token // accessing the "access_token" from the object


    if (_token) {

      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })
     
    }

    spotify.setAccessToken(_token)
    spotify.getMe().then((user) => {
      dispatch({
        type: 'SET_USER',
        user: user
      })
    })

    spotify.getUserPlaylists().then((myPlaylists) => {
      dispatch({
        type: 'SET_MY_PLAYLISTS',
        myPlaylists: myPlaylists
      })
    })

    // spotify.getMyTopArtists().then((playlists) => {
    //   dispatch({
    //     type: 'SET_PLAYLISTS',
    //     playlists: playlists
    //   })
    // })

    spotify.getPlaylist("1vw1XBPJAZ9A7DtJerKPLQ").then(response => (
      dispatch({
        type: 'SET_DISCOVER_WEEKLY',
        discover_weekly: response
      })
    ))

    spotify.searchTracks(search).then(res => (
      dispatch({
        type: 'SET_SEARCH',
        search: res
      })
    ))

  }, [token])

  console.log("myuser: ", myPlaylists)
  console.log("search: ", search)


  return (
    <div className="app">
      {
        token ?  <Player spotify= {spotify} /> : <Login/>
      }
    </div>
  );
}

export default App;
