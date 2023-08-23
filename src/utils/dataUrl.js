export const CLIENT_ID = process.env.CLIENT_ID;
export const REDIRECT_URI =
  typeof window !== "undefined"
    ? window.location.origin
    : "http://localhost:3000";
export const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
export const SCOPES =
  "user-read-recently-played,playlist-modify-private,user-modify-playback-state,user-read-playback-state,user-read-currently-playing,user-top-read,user-read-currently-playing,streaming,user-read-email,user-read-private";
