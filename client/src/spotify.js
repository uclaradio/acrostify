export const authEndpoint = "https://accounts.spotify.com/authorize";

// After our user authenticates their Spotify account,
// our app will redirect them back here. This should
// be changed to reflect page navigation
// const redirectUri = "http://localhost:3000/profile/";
const redirectUri = "https://nameify.netlify.app/profile/";

// This is the unique client ID for our Spotify app
const clientId = "b3bb9bf3313a4287bbd367c6f7a34232";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;

export const getToken = () => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token");

    if (!token && hash) {
        token = hash
            .substring(1)
            .split("&")
            .find((elem) => elem.startsWith("access_token"))
            .split("=")[1];

        window.location.hash = "";
        window.localStorage.setItem("token", token);
    }

    return token;
};