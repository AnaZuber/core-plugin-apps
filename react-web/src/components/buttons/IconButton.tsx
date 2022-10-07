import { AnySoaRecord } from 'dns';
import { FC } from 'react';
import MuiIconButton from '@mui/material/IconButton';
import { createUseStyles } from "react-jss";
import { useCoreTheme } from '../../core/hooks';

const useStyles = createUseStyles({
    button: {
        "&.MuiIconButton-root": {
            color: 'inherit'
        }
    },
})

type Props = {
    children: any;
    className?: string;
    onClick: () => void;
}

export const IconButton: FC<Props> = ({ children, className, onClick = () => { } }) => {
    const theme = useCoreTheme();
    const classes = useStyles(theme);

    return (
        <MuiIconButton
            className={`${className || " "} ${classes.button}`}
            onClick={onClick}>
            {children}
        </MuiIconButton>
    );
}