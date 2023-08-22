import { ReactNode } from "react";

export type MenuItem = {
    url: string;
    icon: ReactNode;
    title: string;
    supressLink: boolean;
}