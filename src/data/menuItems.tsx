import { Home, Search } from 'tabler-icons-react';
import {MenuItem} from '../models/MenuItem'

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