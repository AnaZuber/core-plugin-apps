import { ListItemIcon } from "@mui/material";
import { FC } from "react";
import { createUseStyles } from "react-jss";
import { useNavigate } from "react-router-dom";
import { IconRegistry, List, ListItem } from "../../../components";
import { MenuItem, Theme } from "../../context";
import { useCoreTheme } from "../../hooks";

const useStyles = createUseStyles({
    icons: {
        color: ({ palette }: Theme) => palette.secondary.main,
        fill: ({ palette }: Theme) => palette.secondary.main,
        width: '1.5rem'
    },
    button: {
        color: ({ palette }: Theme) => palette.secondary.main,
        borderRadius: '10px',
        "& .MuiTypography-root": {
            color: ({ palette }: Theme) => palette.secondary.main,
        },
        "&$selected:hover": {
            backgroundColor: ({ palette }: Theme) => palette.primary.main,
            color: ({ palette }: Theme) => palette.secondary.main,
            fontWeight: 'bold',
            "& .MuiListItemIcon-root": {
                color: ({ palette }: Theme) => palette.secondary.main,
            }
        },
        "&:hover": {
            backgroundColor: ({ palette }: Theme) => palette.secondary.main,
            color: ({ palette }: Theme) => palette.secondary.main,
            "& .MuiListItemIcon-root": {
                color: ({ palette }: Theme) => palette.secondary.main,
            }
        },
    },
    menuLabelContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})

type Props = {
    menuItem: MenuItem;
    onMenuChange: (menuTitle: string, menuItems: MenuItem[]) => any;
    onItemSelected: () => any;
}

export const RecursiveMenuItem: FC<Props> = ({ menuItem, onMenuChange, onItemSelected }) => {
    const theme = useCoreTheme();
    const classes = useStyles(theme);

    const ChevronRightIcon = IconRegistry['chevronRight'];

    const navigate = useNavigate();

    if (!menuItem.menuItems) {
        const Icon = (IconRegistry as any)[(menuItem as any).icon ?? ''] ?? IconRegistry['dashboard'];
        return (
            <ListItem className={classes.button} title={menuItem.label} primary={menuItem.label} onClick={() => {
                navigate(menuItem.path);
                onItemSelected();
            }}>
                {Icon && <ListItemIcon>
                    <Icon className={classes.icons} />
                </ListItemIcon>}
            </ListItem>
        )
    }
    const Icon = (IconRegistry as any)[(menuItem as any).icon ?? ''] ?? IconRegistry['dashboard'];
    return (
        <ListItem className={classes.button} onClick={() => onMenuChange(menuItem.label, menuItem.menuItems as any)} primary={<div className={`${classes.icons} ${classes.menuLabelContainer}`}>{menuItem.label} <ChevronRightIcon className={classes.icons} /></div>}>
            {Icon && <ListItemIcon>
                <Icon className={classes.icons} />
            </ListItemIcon>}
        </ListItem>
    );
}