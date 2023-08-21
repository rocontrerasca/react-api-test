import api from "../../utils/api";

const getTopArtists = async (token, limit) => {
  try {
    const topArtist = await api.get("/me/top/artists", {
      headers: {
        Authorization: `Bearer ${token
          }`,
      },
      params: {
        limit: limit || 5,
      },
    });
    return topArtist.data.items.map(function (item) {
      return {
        name: item.name,
        imgUrl: item.images[0]?.url,
        id: item.id
      }
    }).filter(function (x, i, a) {
      return a.findIndex(obj => obj.id === x.id) === i;
    })
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

export default getTopArtists;
