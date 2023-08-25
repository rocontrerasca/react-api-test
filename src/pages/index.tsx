import type { NextPage } from 'next'
import MediaSection from '../components/MediaSection/MediaSection'
import MediaItem from '../components/MediaItem/MediaItem';
import ArtistItem from '../components/ArtistItem/ArtistItem'
import React, { useState, useEffect } from 'react';
import { getLastPlayed, getTopTracks, getTopArtists } from "../api/callers";
import MainLayout from "../layouts/MainLayout";

const Home: NextPage = () => {
  const [lastPlayed, setLastPlayed] = useState([]);
  const [topTracks, setTopTracks] = useState([]);
  const [topArtist, setTopArtist] = useState([]);
  const [token] = useState(window.localStorage.getItem("token"));

  useEffect(() => {
    getLastPlayed(token, 10).then((res: any) => {
      setLastPlayed(res.items)
    });
    getTopTracks(token, 10).then((res: any) => {
      setTopTracks(res.items)
    });
    getTopArtists(token, 10).then((res: any) => {
      setTopArtist(res.items)
    });
  }, []);

  return (
    <>
      {token !== "" && token !== null ?
        <div className='gap-6 grid'>
          <MediaSection link='/' title='Recientemente escuchadas'>
            {lastPlayed?.map((item: any) => (
              <MediaItem key={item.id} {...item} />
            ))}
          </MediaSection>
          <MediaSection link='/' title='Tus canciones favoritas'>
            {topTracks?.map((item: any, key) => (
              <MediaItem key={key} {...item} />
            ))}
          </MediaSection>
          <MediaSection link='/' title='Tus artistas favoritos'>
            {topArtist?.map((item: any, key) => (
              <ArtistItem key={key} {...item} />
            ))}
          </MediaSection>
        </div>
        : <MainLayout><></></MainLayout>
      }
    </>
  )
}

export default Home
