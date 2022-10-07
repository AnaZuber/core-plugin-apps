import { FC } from 'react';
import { Slider as MuiSlider } from '@mui/material';

type Props = {
  className?: string;
}

export const Slider: FC<Props> = ({ className }) => {
  return (
    <MuiSlider className={className || ''} />
  );
}