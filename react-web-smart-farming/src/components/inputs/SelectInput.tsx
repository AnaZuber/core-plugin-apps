import { FC } from 'react';
import MuiSelectInput from '@mui/material/Select/SelectInput';

type Props = {
  value: string;
  className?: string;
}

export const SelectInput: FC<Props> = ({ value, className }) => {

  return (
    <MuiSelectInput
      //className={className || ''}
      value={value}
      autoWidth={false}
      multiple={false}
      native={false} />
  );
}