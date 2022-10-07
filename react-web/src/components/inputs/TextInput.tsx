import { FC } from 'react';
import { InputAdornment, TextField } from '@mui/material';
import { createUseStyles } from "react-jss";
import { Theme } from '../../core/context';
import { useCoreTheme } from '../../core/hooks';
import { IconRegistry } from '../IconRegistry';

const useStyles = createUseStyles({
  icons: {
    color: 'white',
  },
  label: {
    '& .MuiInputLabel-root': {
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'white',
    },

    // TODO: handle
    "& .css-1480iag-MuiInputBase-root-MuiInput-root:after": {
      borderBottomColor: 'white',
    },
  },
})

type Props = {
  value: string;
  onChange: (value: string) => any;
  placeholder?: string;
  label?: string;
  type?: string;
  className?: string;
  iconName: keyof typeof IconRegistry;
}

export const TextInput: FC<Props> = ({ value, onChange, className, placeholder = "", label = "", type = "", iconName }) => {
  const theme = useCoreTheme();
  const classes = useStyles(theme);

  const Icon = IconRegistry[iconName];
  return (
    <TextField
      className={className || ''}
      variant="standard"
      placeholder={placeholder}
      label={label}
      value={value}
      type={type}
      onChange={e => onChange(e.target.value)}
      InputLabelProps={classes.label ? {
        className: classes.label,
      } : {}}
      inputProps={{
        autoComplete: 'off',
      }}
      InputProps={iconName ? {
        startAdornment: (
          <InputAdornment position="start">
            <Icon className={`${className || ''} ${classes.icons}`} />
          </InputAdornment>
        ),
      } : {}}
    />
  );
}