import { FC } from 'react';
import { ToggleButton as MuiToggleButton } from '@mui/material';

type Props = {
  value: string;
  className?: string;
}

export const ToggleButton: FC<Props> = ({ value, className }) => {
  return (
    <MuiToggleButton
      className={className || ''}
      value={value}
    />
  );
}