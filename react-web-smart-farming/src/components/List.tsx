import { FC } from 'react';
import { List as MuiList } from '@mui/material';

type Props = {
  children: any;
  className?: string;

}

export const List: FC<Props> = ({ children, className }) => {
  return (
    <div className={className || ''}>
      <MuiList>
        {children}
      </MuiList>
    </div>
  );
}