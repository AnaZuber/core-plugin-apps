import { FC } from 'react';
import { Checkbox } from '@mui/material';

type Props = {
  value: string;
  onChange: (value: string) => any;
  className?: string;
}

export const CheckboxInput: FC<Props> = ({ value, onChange, className }) => {
  return (
    <Checkbox
      className={className || ''}
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
}