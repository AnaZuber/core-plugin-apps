import { Typography as MuiTypography } from '@mui/material';
import { FC } from 'react';

type Props = {
  children: any;
  sx?: Array<object | boolean> | object; //function je javljao gresku
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
}

export const Typography: FC<Props> = ({ children, className, variant = "h5", sx }) => {
  return (
    <MuiTypography className={className || ' '} variant={variant} sx={sx}>
      {children}
    </MuiTypography>
  );
}