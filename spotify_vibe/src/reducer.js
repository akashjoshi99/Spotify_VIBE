export const initialState = {
   user: null,
   playlists: [],
   playing: false,
   item: null,
   search: null,
   token: ""
}

const reducer = (state, action)=> {
    console.log("hii: ",action.userId)

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

        case 'SET_USER_ID':
            return{
                ...state,
                userId: action.userId
            }
            


        default:
            return state
    }
}

export default reducer