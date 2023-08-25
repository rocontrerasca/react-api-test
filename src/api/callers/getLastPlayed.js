import api from "../../utils/api";

const getLastPlayed = async (token, limit) => {
  try {
    const lastTracks = await api.get("/user/player/recently-played", {
      headers: {
        Authorization: `Bearer ${token
          }`,
      },
      params: {
        limit: limit || 5,
      },
    });
    return lastTracks.data
  } catch (error) {
    if (error.message.includes("401")) {
      window.localStorage.removeItem("token");
    }
    return [];
  }
};

export default getLastPlayed;
