import { NextPage } from 'next'
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import MediaSection from '../../../components/MediaSection/MediaSection'
import MediaItem from '../../../components/MediaItem/MediaItem';
import ArtistItem from '../../../components/ArtistItem/ArtistItem'
import { getResults } from '../../../api/callers'
import LandingPage from "./../../../layouts/LandingPage";

const KeywordSearch: NextPage = () => {
    const router = useRouter();
    const [token] = useState(window.localStorage.getItem("token"));
    const [searchResultList, setSearchResultList] = useState({
        tracks: [],
        artists: [],
        albums: [],
        playList: [],
    });

    useEffect(() => {
        const query = router.query.keyword
        getResults(token, query).then((res: any) => {
            setSearchResultList(res)
        });
    }, [router.query.keyword]);

    return (
        <>
            {token !== "" && token !== null ?
                <div className='gap-6 grid'>
                    <MediaSection link='/' title='Canciones'>
                        {searchResultList.tracks.map((item: any) => (
                            <MediaItem key={item.id} {...item} />
                        ))}
                    </MediaSection>
                    <MediaSection link='/' title='Albumes'>
                        {searchResultList.artists.map((item, key) => (
                            <ArtistItem key={key} {...item} />
                        ))}
                    </MediaSection>
                    <MediaSection link='/' title='Artistas'>
                        {searchResultList.albums.map((item, key) => (
                            <ArtistItem key={key} {...item} />
                        ))}
                    </MediaSection>
                    <MediaSection link='/' title='PlayLists'>
                        {searchResultList.playList.map((item, key) => (
                            <ArtistItem key={key} {...item} />
                        ))}
                    </MediaSection>
                </div>
                : <LandingPage />
            }
        </>
    )
}

export default KeywordSearch