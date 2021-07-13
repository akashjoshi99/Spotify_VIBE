export const initialState = {
   user: null,
   playlists: [],
   playing: false,
   item: null,
   search: null
   //token: "BQC2t0T4mKoWs98gonkIm8MxAtXCHec9YS78L01rVLTx-IFkhsG7gpf5monJsTBGZzxmOfnR6G6XEFSBg2hmcHU2CDipwjo18I9GznvIQrGNFemqNHbw5dmRAsEPA5IQie7J2mqFShRS4RmxwihoDPW0R8Ve3YF4ga6WW1llS1o42pd24rOG"
}

const reducer = (state, action)=> {
    console.log("hii: ",action)

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
                }

        case 'SET_MY_PLAYLISTS':
            return {
                ...state,
                myPlaylists: action.myPlaylists
            }

         case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            }    

        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly: action.discover_weekly
            }

        case 'SET_SEARCH':
            return{
                ...state,
                search: action.search
            }


        default:
            return state
    }
}

export default reducer