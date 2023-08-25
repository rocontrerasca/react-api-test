import api from "../../utils/api";

const getTopArtists = async (token, limit) => {
  try {
    const topArtist = await api.get("/user/top/artists", {
      headers: {
        Authorization: `Bearer ${token
          }`,
      },
      params: {
        limit: limit || 5,
      },
    });
    return topArtist.data
  } catch (error) {
    if (error.message.includes("401")) {
      window.localStorage.removeItem("token");
    }
    return [];
  }
};

export default getTopArtists;
