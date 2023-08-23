import api from "../../utils/api";

const getForUList = async (token, seedArtist) => {
  try {
    const forU = await api.get("/recommendations", {
      headers: {
        Authorization: `Bearer ${token
          }`,
      },
      params: {
        seedArtists: seedArtist,
        limit: 15,
        market: "CO"
      },
    });
    return forU.data
  } catch (error) {
    if (error.message.includes("401")) {
      window.localStorage.removeItem("token");
      return null
    }
    else {
      return [];
    }
  }
};

export default getForUList;
