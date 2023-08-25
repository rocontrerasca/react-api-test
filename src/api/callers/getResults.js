import api from "../../utils/api";

const getResults = async (token, query) => {
  try {
    const resSearch = await api.get("/search", {
      headers: {
        Authorization: `Bearer ${token || window.localStorage.getItem("token")
          }`,
      },
      params: {
        q: query,
        type: "track,artist,album,playlist",
        market: "CO",
        limit: 5,
      },
    });
    return resSearch.data
  } catch (error) {
    if (error.message.includes("401")) {
      window.localStorage.removeItem("token");
    }
    return {
      albums: [],
      tracks: [],
      artists: [],
      playList: []
    }
  }
};

export default getResults;
