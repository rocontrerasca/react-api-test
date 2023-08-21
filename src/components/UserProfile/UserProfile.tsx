import { createStyles, Menu, Text } from '@mantine/core'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { AiOutlinePoweroff } from "react-icons/ai";
import styles from "./.module.sass";
import { getUser } from "../../api/callers";

const useStyles = createStyles({
    dropdown: {
        backgroundColor: '#282828',
        border: '0'
    },
    item: {
        color: '#fff',
        fontWeight: 600
    }
})

const UserProfile = () => {
    const { classes, cx } = useStyles();

    const [user, setUser] = useState(null);

    useEffect(() => {
        let token = window.localStorage.getItem("token")
        getUser(token).then((res: any) => setUser(res));
    }, []);

    return (
        <div className="relative z-10">
            <Menu
                opened={false}
                position="bottom-end"
                classNames={{
                    dropdown: classes.dropdown,
                    item: classes.item
                }}
                transition="pop-top-right"
                shadow="sm"
                width={224}
            >
                <Menu.Target>
                    <div
                        className={
                            cx(
                                { 'bg-[#282828]': false },
                                'text-white cursor-pointer h-8 rounded-3xl flex justify-around items-center gap-2'
                            )
                        }
                    >
                        <div className='flex justify-center items-center'>
                            <img alt='Profile Image' className="p-0.5 rounded-full" width={28} height={28}
                                src={user === null || user?.images?.length === 0 ?
                                    "https://avatars.dicebear.com/api/jdenticon/xyz.svg" : user?.images[0]?.url} />
                        </div>
                        <>
                            <Text size="sm" weight="bold">{user?.display_name}</Text>
                            <div className={styles.logout_btn}>
                                <a
                                    title="Logout"
                                    href="logout"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.localStorage.removeItem("token");
                                        window.location.replace("/");
                                    }}
                                >
                                    <AiOutlinePoweroff />
                                </a>
                            </div>
                        </>

                    </div>
                </Menu.Target>
            </Menu>
        </div>
    )
}
export default UserProfile;