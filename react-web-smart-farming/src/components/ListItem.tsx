import { FC } from 'react';
import MuiListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

type Props = {
  children: any;
  className?: string;
  title?: string;
  primary?: string | JSX.Element;
  onClick?: () => void;
}

export const ListItem: FC<Props> = ({ children, title, primary, onClick, className }) => {
  return (
    <MuiListItem button onClick={onClick} className={className || ''}>
      {children}
      {primary && <ListItemText primary={primary} />}
    </MuiListItem>
  );
}