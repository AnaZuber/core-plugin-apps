import { FC } from 'react';
import { Switch as MuiSwitch } from '@mui/material';

type Props = {
  className?: string;
  checked?: boolean;
  onChange?: any;
}

export const Switch: FC<Props> = ({ className, checked, onChange }) => {
  return (
    <MuiSwitch className={className || ''} checked={checked} onChange={onChange} />
  );
}