import api from "../../utils/api";

const getTopTracks = async (token, limit) => {
  try {
    const topTracks = await api.get("/me/top/tracks", {
      headers: {
        Authorization: `Bearer ${token
          }`,
      },
      params: {
        limit: limit || 5,
      },
    });
    return topTracks.data.items.map(function (item) {
      return {
        title: item.name,
        artist: item.artists.map(e => e.name).join(' & '),
        imgUrl: item.album.images[0]?.url,
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

export default getTopTracks;
