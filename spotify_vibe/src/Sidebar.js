import React from 'react'
import "./Sidebar.css"
import Body from './Body'
import SidebarOption from './SidebarOption'
import HomeIcon from '@material-ui/icons/Home'
import SearchIcon from '@material-ui/icons/Search'
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from "./DataLayer"

function Sidebar() {
    const [{playlists, myPlaylists}, dispatch] = useDataLayerValue()

    return (
        <div className="sidebar">
            <img className="sidebar__logo" src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" 
            alt='Spotify logo'></img>
            
                <SidebarOption Icon = {SearchIcon} title="Search"/>
                <SidebarOption Icon = {HomeIcon} title="Home"/>
                <SidebarOption Icon = {LibraryMusicIcon} title="Your Library"/>

            <br/>
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr/>

            {/* {playlists?.items?.map(playlists => (
                <SidebarOption title ={playlists.name} />
            ))} */}

            {myPlaylists?.items?.map(myPlaylists => (
                    <SidebarOption id={myPlaylists.id} title ={myPlaylists.name} />
            ))}

            {/* {myPlaylists?.items?.map(myPlaylists => (
                <SidebarOption title ={myPlaylists.name} />
            ))} */}
        
        </div>
    )
}

export default Sidebar
