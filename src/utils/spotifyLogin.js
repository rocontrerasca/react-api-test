export const CLIENT_ID = process.env.CLIENT_ID;
export const REDIRECT_URI =
  typeof window !== "undefined"
    ? window.location.origin
    : "http://localhost:3000";
export const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
export const RESPONSE_TYPE = "token";
export const SCOPES =
  "user-read-recently-played,playlist-modify-private,user-modify-playback-state,user-read-playback-state,user-read-currently-playing,user-top-read,user-read-currently-playing,streaming,user-read-email,user-read-private";
export const SPOTIFY_LOGIN = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&scope=${SCOPES}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`;
