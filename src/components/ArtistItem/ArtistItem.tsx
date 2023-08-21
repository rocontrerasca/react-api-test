import { createStyles, Text } from '@mantine/core';
import Image from 'next/image';
import React, { FunctionComponent } from 'react'
import { Artist } from '../../models/Artist';

type AristItemProps = Artist;

const useStyles = createStyles({
    wrapper: {
        transition: 'background-color .3s ease',
        '&:hover': {
            background: '#ffd24f',
            color: 'white'
        }
    },
    imgWrapper: {
        backgroundColor: '#333',
        boxShadow: '0 8px 24px rgb(0 0 0 / 50%)',
        position: 'relative',
        paddingBottom: '100%',
        width: '100%',
        borderRadius: '50%',
        overflow: 'hidden',
        height: '100px'
    }
});

const ArtistItem: FunctionComponent<AristItemProps> = (item) => {
    const { classes, cx } = useStyles();

    return (
        <div
            className={cx(classes.wrapper, 'bg-[#008C44] rounded-md flex-grow relative p-4 w-full cursor-pointer')}>
            <div className='h-full'>
                <div className='mb-4 relative'>
                    <div className={classes.imgWrapper}>
                        <img alt={item.name} src={item.imgUrl} />
                    </div>
                </div>
                <div className='min-h-[62px]'>
                    <Text title={item.name} lineClamp={1} className='pb-1' size="md" weight={700}>{item.name}</Text>
                    <Text lineClamp={1} size="sm">{item.type}</Text>
                </div>
            </div>
        </div>
    )
}

export default ArtistItem