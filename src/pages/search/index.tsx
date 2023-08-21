import { createStyles, Text } from '@mantine/core';
import { NextPage } from 'next';
import Head from 'next/head';
import React, { useState, useEffect } from 'react'
import MediaItem from '../../components/MediaItem/MediaItem';
import { Breakpoint, maxWidth, minWidth } from '../../utils/breakpoints';
import { getForUList, getTopArtists } from "../../api/callers";
import LandingPage from "../../layouts/LandingPage";

const useStyles = createStyles({
    gridContainer: {
        '--column-width': '197px',
        '--column-count': 2,
        '--grid-gap': '24px',
        display: 'grid',
        overflow: 'hidden',
        gap: 'var(--grid-gap)',
        gridTemplateColumns: 'auto auto',
    },
    browseAllContainer: {
        '--column-width': '197px',
        '--column-count': 5,
        '--grid-gap': '24px',
        gridAutoRows: 'auto',
        gridTemplateRows: '1fr',
        overflowY: 'hidden',
        gap: 'var(--grid-gap)',
        display: 'grid',
        gridTemplateColumns: 'repeat(var(--column-count),minmax(0,1fr))',

        [`@media ${maxWidth(Breakpoint.sm)}`]: {
            '--column-count': 2,
        },
        [`@media ${minWidth(Breakpoint.sm)}`]: {
            '--column-count': 3,
        },
        [`@media ${minWidth(Breakpoint.md)}`]: {
            '--column-count': 3,
        },
        [`@media ${minWidth(Breakpoint.lg)}`]: {
            '--column-count': 4,
        },
        [`@media ${minWidth(Breakpoint.xl)}`]: {
            '--column-count': 5,
        },
        [`@media ${minWidth(Breakpoint.xxl)}`]: {
            '--column-count': 8,
        },
    }
});

const Search: NextPage = () => {
    const { classes } = useStyles();
    const [forUList, setForUList] = useState([]);
    const [token] = useState(window.localStorage.getItem("token"));

    useEffect(() => {
        getTopArtists(token, 4).then((resArtist: any) => {
            getForUList(token, resArtist.map((art: any) => art.id).join(',')).then((res: any) => {
                setForUList(res)
            });
        });

    }, [token]);

    return (
        <>
            {token !== "" && token !== null ?
                <>
                    <Head>
                        <title>Busqueda</title>
                        <meta property="og:title" title="Spotify - Search" key="title" />
                    </Head>
                    <div>
                        <div className='grid gap-8'>
                            <section>
                                <div className='flex mb-4 items-end justify-between'>
                                    <Text lineClamp={1} size={24} weight={700}>Recomendaciones</Text>
                                </div>
                                <div className={classes.browseAllContainer}>
                                    {forUList.map((item, key) => (
                                        <MediaItem key={item.id} {...item} />
                                    ))}
                                </div>
                            </section>
                        </div>
                    </div>
                </>
                : <LandingPage />
            }
        </>
    )
}

export default Search;