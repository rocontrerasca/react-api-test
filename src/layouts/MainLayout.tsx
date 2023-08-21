import { createStyles, Drawer, ScrollArea } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import dynamic from 'next/dynamic';
import React, { FunctionComponent, ReactNode, useState, useEffect } from 'react'
import { Navbar } from '../components/Navbar';
import { selectMenuOpened, toggleMenu } from '../store/features/menu.slice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { Breakpoint, maxWidth } from '../utils/breakpoints';
import LandingPage from "./LandingPage";

const Header = dynamic(() => import('../components/Header/Header'), {
    ssr: false
});

const useStyles = createStyles((theme, { sm }: { sm: boolean }) => ({
    wrapper: {
        gridTemplateAreas: `"${sm ? 'main-view' : 'nav-bar'} main-view buddy-feed" "now-playing-bar now-playing-bar now-playing-bar"`,
        gridTemplateColumns: sm ? '1fr' : 'auto 1fr',
        gridTemplateRows: '1fr auto'
    },
    mainView: {
        gridArea: 'main-view',
        overflowY: 'hidden',
        background: 'white'
    },
    drawer: {
        backgroundColor: '#000'
    }
}));

const MainLayout: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
    const dispatch = useAppDispatch();
    const opened = useAppSelector(selectMenuOpened);
    const sm = useMediaQuery(maxWidth(Breakpoint.sm));
    const { classes, cx } = useStyles({ sm });
    const closeMenu = () => dispatch(toggleMenu());

    const [token, setToken] = useState("");

    useEffect(() => {
        const hash = window.location.hash;
        let token = window.localStorage.getItem("token")
        if (hash && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }
        setToken(token)
    }, [])

    return (
        <>
            {token !== "" && token !== null ?
                <div className={cx(classes.wrapper, 'grid h-full min-h-full relative w-full grid-rows-1')}>
                    <Header />
                    {!sm ? <Navbar /> : (
                        <Drawer
                            classNames={{
                                drawer: classes.drawer
                            }}
                            opened={opened}
                            onClose={closeMenu}
                            padding="xs"
                            overlayOpacity={.55}
                            overlayBlur={2}
                        >
                            <Navbar />
                        </Drawer>
                    )}
                    <ScrollArea>
                        <div id="maindiv" className={classes.mainView}>
                            <main className='mt-16 inline-block w-full py-6 px-8'>
                                {children}
                            </main>
                        </div>
                    </ScrollArea>
                </div>
                : <LandingPage />
            }
        </>
    )
}

export default MainLayout;