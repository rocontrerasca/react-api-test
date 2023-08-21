import api from "../../utils/api";

const getForUList = async (token, seedArtist) => {
  try {
    const forU = await api.get("/recommendations", {
      headers: {
        Authorization: `Bearer ${token
          }`,
      },
      params: {
        seed_artists: seedArtist,
        limit: 15,
        markey: "CO"
      },
    });
    return forU.data.tracks.map(function (item) {
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

export default getForUList;
