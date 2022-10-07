import { FC } from 'react';
import { useCoreTheme } from '../core/hooks';
import { createUseStyles } from "react-jss";
import { Theme } from '../core/context';
import { ReactComponent as LogoSvg } from "../media/Logo.svg";

const useStyles = createUseStyles({
    margin: {
        margin: "8px",
    }
})

type Props = {
    className?: string;
}

export const Logo: FC<Props> = ({ className }) => {
    const classes = useStyles();

    return (
        <div className={`${className || ''} ${classes.margin}`}> 
            <LogoSvg />
        </div>
    );
}