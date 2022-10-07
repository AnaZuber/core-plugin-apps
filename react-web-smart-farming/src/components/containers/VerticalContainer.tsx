import { FC } from 'react';
import { Grid } from '@mui/material';

type Props = {
    children: any;
    className?: string;
    justifyContent?: "flex-start" | "center" | "flex-end" | "space-between" | "space-around" | "space-evenly";
    alignItems?: "flex-start" | "center" | "flex-end" | "baseline" | "stretch";
    minHeight?: string | number;
    minWidth?: string | number;
}
export const VerticalContainer: FC<Props> = ({ children, className, justifyContent = "center", alignItems = "stretch", minHeight, minWidth }) => {
    return (
        <Grid
            display="flex"
            flexDirection="column"
            className={className || ''}
            justifyContent={justifyContent}
            alignItems={alignItems}
            sx={{
                ...(minHeight ? { minHeight } : {}),
                ...(minWidth ? { minWidth } : {})
            }}>
            {children}
        </Grid>
    );
}
