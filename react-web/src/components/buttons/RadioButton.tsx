import { FC } from 'react';
import { Radio } from '@mui/material';

type Props = {
  value: string;
  className?: string;
  onChange: (value: string) => any;
}

export const RadioButton: FC<Props> = ({ value, className, onChange }) => {
  return (
    <Radio
      className={className || ''}
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
}