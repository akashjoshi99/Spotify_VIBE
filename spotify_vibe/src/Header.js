import React, {useState, useEffect} from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search'
import { Avatar } from "@material-ui/core";
import { useDataLayerValue } from "./DataLayer"
import SpotifyWebApi from "spotify-web-api-js"

// const spotify = new SpotifyWebApi({
//     clientId: "50d615488c9a47289b57a00bb0b70053",
//   })

function Header() {
    const [{user, token}, dispatch] = useDataLayerValue()
    // const [search, setSearch] = useState("")
    // const [searchResults, setSearchResults] = useState([])


    // useEffect(() => {
    //     if (!token) return
    //     spotify.setAccessToken(token)
    //   }, [token])
    
    //   useEffect(() => {
    //     if (!search) return setSearchResults([])
    //     if (!token) return
    
    //     let cancel = false
    //     spotify.searchTracks(search).then(res => {
    //       if (cancel) return
    //       setSearchResults(
    //         res.body.tracks.items.map(track => {
    //           const smallestAlbumImage = track.album.images.reduce(
    //             (smallest, image) => {
    //               if (image.height < smallest.height) return image
    //               return smallest
    //             },
    //             track.album.images[0]
    //           )
    
    //           return {
    //             artist: track.artists[0].name,
    //             title: track.name,
    //             uri: track.uri,
    //             albumUrl: smallestAlbumImage.url,
    //           }
    //         })
    //       )
    //     })
    
    //     return () => (cancel = true)
    //   }, [search, token])


    return (
        <div className= "header">
            <div className="header__left">
               <SearchIcon/> 
               <input type="search"
                placeholder="Search Songs/Artists">

               </input>
            </div>
            <div className="header__right">
                <Avatar src={user?.images[0]?.url}
                alt={user?.display_name}/>
                <h4>{user?.display_name}</h4>

            </div>
            
        </div>
    )
}

export default Header
