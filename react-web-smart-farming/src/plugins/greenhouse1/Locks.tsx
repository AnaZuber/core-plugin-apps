import { useState } from "react";
import { createUseStyles } from "react-jss";
import { ButtonComponent } from "../shared/ButtonComponent";
import { Theme } from "../../core/context";
import { useCoreTheme } from "../../core/hooks";
import { PluginContainer } from "../shared/PluginContainer";

const useStyles = createUseStyles({
  buttonContainer: {
    cursor: 'pointer',
    height: '50vw',
    width: '50vw',
    borderRadius: '50%',
    border: 0,
    fontWeight: 600,
    textTransform: 'uppercase',
    fontSize: '0.875 rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: ({ palette }: Theme) => palette.secondary.main,
    fontFamily: 'monospace',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  }
})

export const Locks = () => {
  const theme = useCoreTheme();
  const classes = useStyles(theme);

  const [on, setOn] = useState(true);
  const [clicked, set] = useState(false)

  const onPowerChange = (on: boolean) => {
    setOn(!on);
  }

  return (
    <PluginContainer title='Lock the door of greenhouse 1' subtitle={`Current: ${on ? 'Locked' : 'Unlocked'}`} justifyContent="center">
      <ButtonComponent className={classes.buttonContainer} iconFontSize='4em' iconName={on ? 'lock' : 'unlock'} on={on} set={set} onPowerChange={onPowerChange} clicked={clicked} />
    </PluginContainer>
  )
}
