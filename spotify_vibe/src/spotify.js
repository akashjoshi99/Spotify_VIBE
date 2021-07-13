export const authEndpoint = "https://accounts.spotify.com/authorize"
const redirectUri = "http://localhost:3000/"
const clientId = "50d615488c9a47289b57a00bb0b70053"

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    "playlist-read-private"
]
//after login trying to access Token from the URL
export const getTokenUrl = () => {
    return window.location.hash
    .substring(1)       //access_token=BQA6KeAtgaWkKl9s7H9Xdaysakuc0bKSLoi4RvpHYX1-6ZKxzqDotk8apVN4LkdkF1a_5R7QEf1JA84lPPi1ldm0MbBAuBKXjav-uWQhShhkHsp_Z_884-ggDsb6PaL-_o2-OqyHIWuQP1OG0YEND-sLs5klRL41BE4GiRA-WI2-CEJYMDOU&token_type=Bearer&expires_in=3600
    .split('&')         //[access_token=BQA6KeAtgaWkKl9s7H9Xdaysakuc0bKSLoi4RvpHYX1-6ZKxzqDotk8apVN4LkdkF1a_5R7QEf1JA84lPPi1ldm0MbBAuBKXjav-uWQhShhkHsp_Z_884-ggDsb6PaL-_o2-OqyHIWuQP1OG0YEND-sLs5klRL41BE4GiRA-WI2-CEJYMDOU, token_type=Bearer, expires_in=3600]

    .reduce((initial, item) => {
        let parts = item.split("=")
        initial[parts[0]] = decodeURIComponent(parts[1])

        return initial
    }, {})

    //{access_token: "BQA6KeAtgaWkKl9s7H9Xdaysakuc0bKSLoi4RvpHYX1-6ZKxzq…-OqyHIWuQP1OG0YEND-sLs5klRL41BE4GiRA-WI2-CEJYMDOU", token_type: "Bearer", expires_in: "3600"}

   

    
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`