import axios from 'axios'

const authEndPoint = "https://accounts.spotify.com/authorize?";
const clientID = "8b6948bb377c467996c2fd9d13b4ba6e";
const redirectUri = "http://localhost:3000";
const scopes = [ 
    "user-library-read", 
    "playlist-read-private", 
];


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

// const getPlaylist = async()=>{
//     const {data} = await axios.get("https://api.spotify.com/v1/me/playlists", {
//       headers: {
//         Authorization: `Bearer  ${token}`
//       }
//     })
//     console.log(data.items[0].images[0].url)
//   }
//   getPlaylist()