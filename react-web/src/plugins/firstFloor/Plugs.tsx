import { createUseStyles } from "react-jss";
import { ContentContainer } from "../../core/components/ContentContainer";
import { VerticalContainer } from "../../components";
import { FC, useState } from "react";
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
  }
})

type Props = {
}

export const Plugs: FC<Props> = () => {
  const theme = useCoreTheme();
  const classes = useStyles(theme);

  const [on, setOn] = useState(true);
  const [clicked, set] = useState(false)

  const onPowerChange = (on: boolean) => {
    setOn(!on);
  }
  return (
    <PluginContainer title='Plugs in living room' subtitle={`Current: ${on ? 'On' : 'Off'}`} justifyContent="center">
      <ButtonComponent className={classes.buttonContainer} iconFontSize='4em'  iconName='power' on={on} set={set} onPowerChange={onPowerChange} clicked={clicked} />
    </PluginContainer>
  )
}


