import api from "../../utils/api";

const getTopTracks = async (token, limit) => {
  try {
    const topTracks = await api.get("/user/top/tracks", {
      headers: {
        Authorization: `Bearer ${token
          }`,
      },
      params: {
        limit: limit || 5,
      },
    });
    return topTracks.data
  } catch (error) {
    if (error.message.includes("401")) {
      window.localStorage.removeItem("token");
    }
    return [];
  }
};

export default getTopTracks;
