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

    var albums = resSearch.data.albums?.items?.map(function (item) {
      return {
        name: item.name,
        artist: item.artists.map(e => e.name).join(' & '),
        imgUrl: item.images[0]?.url,
        id: item.id,
        type: "Album"
      }
    }).filter(function (x, i, a) {
      return a.findIndex(obj => obj.id === x.id) === i;
    })

    var artists = resSearch.data.artists?.items?.map(function (item) {
      return {
        name: item.name,
        imgUrl: item.images[0]?.url,
        id: item.id,
        type: "Artista"
      }
    }).filter(function (x, i, a) {
      return a.findIndex(obj => obj.id === x.id) === i;
    })

    var tracks = resSearch.data.tracks?.items?.map(function (item) {
      return {
        title: item.name,
        artist: item.artists.map(e => e.name).join(' & '),
        imgUrl: item.album.images[0]?.url,
        id: item.id
      }
    }).filter(function (x, i, a) {
      return a.findIndex(obj => obj.id === x.id) === i;
    })


    var playList = resSearch.data.playlists?.items?.map(function (item) {
      return {
        name: item.name,
        imgUrl: item.images[0]?.url,
        id: item.id,
        type: "Playlist"
      }
    }).filter(function (x, i, a) {
      return a.findIndex(obj => obj.id === x.id) === i;
    })

    return {
      albums: albums,
      tracks: tracks,
      artists: artists,
      playList: playList
    }
  } catch (error) {
    if (error.message.includes("401")) {
      window.localStorage.removeItem("token");
      return null
    }
    else {
      return {
        albums: [],
        tracks: [],
        artists: [],
        playList: []
      }
    }
  }
};

export default getResults;
