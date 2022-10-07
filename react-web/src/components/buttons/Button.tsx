import { FC } from 'react';
import { Button as MuiButton } from '@mui/material';
import { createUseStyles } from "react-jss";
import { useCoreTheme } from '../../core/hooks';

type Props = {
  value: string;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export const Button: FC<Props> = ({ value, className, type = "submit" }) => {
  return (
    <MuiButton
      className={`${className || " "}`}
      type={type}
    >{value}</MuiButton>
  );
}