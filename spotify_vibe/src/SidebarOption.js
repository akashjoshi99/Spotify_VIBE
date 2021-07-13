import React, {useEffect} from 'react'
import "./SidebarOption.css"
import { useDataLayerValue } from "./DataLayer"

function SidebarOption({title,id, Icon}) {
    const [{playlists, myPlaylists, userId }, dispatch] = useDataLayerValue()

    function HandleSubmit(e) {
        console.log("MyId: ", id)
        dispatch({
            type: 'SET_USER_ID',
            userId: id
          })
    }

    

    return (
        <div className="sidebarOption">
            {Icon && <Icon className="sidebarOption__icon"/>}
            {Icon ? <h4>{title}</h4> : <p><a onClick={HandleSubmit}>{title}</a></p>}
            
        </div>
    )
}


// console.log("USERID: ", userId)




export default SidebarOption
