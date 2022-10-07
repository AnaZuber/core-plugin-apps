import { FC, useContext, useEffect, useState } from 'react';
import { IconButton, IconRegistry, Logo, Switch } from '../../../components';
import { CoreContext, MenuItem, Theme } from '../../context';
import { createUseStyles } from 'react-jss';
import { useCoreTheme } from '../../hooks';
import { RecursiveMenuItem } from './RecursiveMenuItem';
import { useSpring, animated } from '@react-spring/web';
import CloseIcon from '@mui/icons-material/Close';

const sidebarWidth = 350;

const useStyles = createUseStyles({
    sideOverlay: {
        width: '100vw',
        height: '100vh',
        position: 'fixed',
    },
    sidebarContainer: {
        position: 'fixed',
        top: 0,
        width: `${sidebarWidth}px`,
        padding: '25px',
        boxSizing: 'border-box',
        height: '100%',
        backgroundColor: ({ palette }: Theme) => palette.primary.main,
        borderRadius: '0 15px 15px 0',
        zIndex: '9999'
    },
    sidebar: {
        color: ({ palette }: Theme) => palette.primary.main,
    },
    sidebarTop: {
        height: '3em',
        marginBottom: '1em',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    sidebarTopLogo: {
        display: 'flex',
        alignItems: 'center',
        '& h3': {
            marginLeft: '0.6em'
        }
    },
    sidebarOpener: {
        position: 'absolute',
        top: 0,
        left: 0,
        cursor: 'pointer',
        color: ({ palette }: Theme) => palette.secondary.main,
    },
    sidebarCloser: {
        color: ({ palette }: Theme) => palette.secondary.main
    },
    logo: {
        width: '20vw',
        maxWidth: '150px',
        padding: '10px',
    },
    leftIcon: {
        position: 'absolute',
        left: 0
    },
    icons: {
        color: ({ palette }: Theme) => palette.secondary.main,
    },
});

type Props = {
    setTheme: any,
    isDark: boolean,
}

export const Sidebar: FC<Props> = ({ setTheme, isDark }) => {
    const theme = useCoreTheme();
    const classes = useStyles(theme);

    const ChevronLeftIcon = IconRegistry['chevronLeft'];
    const MenuIcon = IconRegistry['menu'];

    const { menuItems } = useContext(CoreContext);

    const [open, setOpen] = useState(false);
    const [position, setPosition] = useState(-sidebarWidth);
    const [prevPosition, setPrevPosition] = useState(-sidebarWidth);

    const [menuTitle, setMenuTitle] = useState("isobar.ot");
    const [menu, setMenu] = useState<MenuItem[]>(menuItems);
    const [menusStack, setMenusStack] = useState<MenuItem[][]>([]);
    const [titlesStack, setTitlesStack] = useState<string[]>([]);

    const [{ left, inversedLeft, buttonOpacity, sidebarOpacity }] = useSpring({
        to: {
            left: position,
            inversedLeft: -prevPosition,
            buttonOpacity: open ? 0 : 1,
            sidebarOpacity: open ? 1 : 0.5,
        },
        from: {
            left: prevPosition,
            inversedLeft: -position,
            buttonOpacity: open ? 1 : 0,
            sidebarOpacity: open ? 0.5 : 1,
        }
    }, [open, position, prevPosition]);

    const openSidebar = () => {
        setOpen(true);
        setPrevPosition(position);
        setPosition(0);
    }

    const closeSidebar = () => {
        setOpen(false);
        setPrevPosition(position);
        setPosition(-sidebarWidth);
    }

    const changeMenu = (m: MenuItem[], t: string) => {
        setMenusStack(prevMenuStack => [...prevMenuStack, menu]);
        setTitlesStack(prevTitleStack => [...prevTitleStack, menuTitle]);
        setMenu(m);
        setMenuTitle(t);
    }

    const goToPreviousMenu = () => {
        const m = menusStack.pop();
        const t = titlesStack.pop();
        if (!m || !t) {
            closeSidebar();
            return;
        }
        setMenu(m);
        setMenuTitle(t);
        setMenusStack(menusStack);
        setTitlesStack(titlesStack);
    }

    const onThemeChange = (isDark: boolean) => {
        setTheme(!isDark);
    }

    useEffect(() => {
        setMenu(menuItems);
    }, [menuItems]);

    return (
        <>
            <animated.div style={{ left, opacity: sidebarOpacity }} className={`${classes.sidebarContainer} ${classes.sidebar}`}>
                <div className={classes.sidebarTop}>
                    {menusStack.length >= 1 && <IconButton className={classes.leftIcon} onClick={() => {
                        goToPreviousMenu();
                    }}>
                        <ChevronLeftIcon className={classes.icons} />
                    </IconButton>}
                    <span className={classes.sidebarTopLogo}>
                        <Logo className={classes.logo} />
                    </span>
                    <Switch checked={isDark} onChange={() => onThemeChange(isDark)} />
                    <IconButton onClick={closeSidebar}>
                        <CloseIcon className={classes.sidebarCloser} />
                    </IconButton>
                </div>
                {menu.map((item, i) => <RecursiveMenuItem onItemSelected={closeSidebar} onMenuChange={(title, menu) => changeMenu(menu, title)} key={i + item.path} menuItem={item} />)}
            </animated.div>
            <animated.span style={{ opacity: buttonOpacity }} className={`${classes.sidebarOpener}`}>
                <IconButton onClick={openSidebar} className={`${classes.sidebarOpener}`}>
                    <MenuIcon />
                </IconButton>
            </animated.span>
            {
                open && <animated.div
                    style={{ left: inversedLeft }}
                    className={classes.sideOverlay}
                    onClick={closeSidebar}
                ></animated.div>
            }
        </>
    );
}
