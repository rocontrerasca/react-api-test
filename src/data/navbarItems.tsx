import { ReactNode } from "react";
import { Home, Search, Books, Plus, Heart } from 'tabler-icons-react';

type NavbarItem = {
    url: string;
    icon: ReactNode;
    title: string;
    supressLink: boolean;
}

export const navbarItems: NavbarItem[] = [
    {
        url: '/',
        icon: <Home size={24} />,
        title: 'Inicio',
        supressLink: false
    },
    {
        url: '/search',
        icon: <Search size={24} />,
        title: 'Buscar',
        supressLink: false
    }
]