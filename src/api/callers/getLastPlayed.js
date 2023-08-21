import api from "../../utils/api";

const getLastPlayed = async (token, limit) => {
  try {
    const lastTracks = await api.get("/me/player/recently-played", {
      headers: {
        Authorization: `Bearer ${token
          }`,
      },
      params: {
        limit: limit || 5,
      },
    });
    return lastTracks.data.items.map(function (item) {
      return {
        title: item.track.name,
        artist: item.track.artists.map(e => e.name).join(' & '),
        imgUrl: item.track.album.images[0]?.url,
        id: item.track.id
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

export default getLastPlayed;
