import { FC } from 'react';
import { Tooltip as MuiTooltip } from '@mui/material';

type Props = {
    children: any;
    title?: string;
    className?: string;

}

export const Tooltip: FC<Props> = ({ children, title, className }) => {
    return (
        <MuiTooltip title={title ?? ""} className={className || ''}>
            {children}
        </MuiTooltip>
    );
}