import { ReactNode } from "react";
import { Home, Search } from 'tabler-icons-react';

type MenuItem = {
    url: string;
    icon: ReactNode;
    title: string;
    supressLink: boolean;
}

export const menuItems: MenuItem[] = [
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