import axios from 'axios'

const authEndPoint = "https://accounts.spotify.com/authorize?";
const clientID = "8b6948bb377c467996c2fd9d13b4ba6e";
const redirectUri = "http://localhost:3000";
const scopes = [
    "user-read-email", 
    "user-read-private", 
    "user-library-read", 
    "playlist-read-private", 
    "user-modify-playback-state", 
    "user-read-playback-state", 
    "user-read-currently-playing",
    "user-read-playback-position",
    "user-top-read",
];
//getting the access Token
// export  const getTokenFromUrl = () =>{
//     return window.location.hash
//     .substring(1)
//     .split('&')
//     .reduce((initial, item) => {
//         let parts = item.split('=');
//         initial[parts[0]] = decodeURIComponent(parts[1])

//         return initial
//     }, {});
// }

export  const loginEndPoint = `${authEndPoint}client_id=${clientID}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
    baseURL: "https://api.spotify.com/v1/",
})

export const setClientToken = (token) => {
    apiClient.interceptors.request.use(async function(config){
    config.headers.Authorization = "Bearer " + token;
    return config;
    })
}
export default apiClient;