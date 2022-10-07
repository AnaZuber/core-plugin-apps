import MuiCard from '@mui/material/Card';
import { FC } from 'react';
import { VerticalContainer } from '.';

type Props = {
  children: any;
  title?: string;
  className?: string;
}

export const Card: FC<Props> = ({ children, title, className }) => {
  return (
    <VerticalContainer justifyContent="center" alignItems="center" minHeight='100vh' minWidth='100vh'>
      <MuiCard className={className || ''} title={title}>
        {children}
      </MuiCard>
    </VerticalContainer>
  );
}