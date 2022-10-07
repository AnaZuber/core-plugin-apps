import { createUseStyles } from "react-jss";
import { useCoreTheme } from "../../../core/hooks";
import { IconRegistry } from "../../../components";
import { FC, useState } from "react";
import { Theme } from "../../../core/context";
import { PluginContainer } from "../../shared/PluginContainer";
import { ButtonComponent } from "../../shared/ButtonComponent";

const useStyles = createUseStyles({
  buttonContainer: {
    cursor: 'pointer',
    height: '80px',
    width: '180px',
    borderRadius: '80px',
    border: 0,
    textTransform: 'uppercase',
    fontSize: '2em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '30px 30px 0px 30px',
  },
  text: {
    height: '7vh',
    borderRadius: '10px',
    fontSize: '1.5em',
    textAlign: 'center',
    margin: '30px 5px 5px 5px',
    color: ({ palette }: Theme) => palette.secondary.main,
  },
  controlContainer: {
    padding: '0 0 1em 0'
  }
})

type Props = {
  icon?: string,
}

export const DryerMachine: FC<Props> = ({ icon }) => {
  const theme = useCoreTheme();
  const classes = useStyles(theme);
  const [on, setOn] = useState(true);
  const [clicked, set] = useState(false)

  var Icon = IconRegistry['dryerMachine'];

  const onPowerChange = (on: boolean) => {
    setOn(!on);
  }

  return (
    <PluginContainer title='Turn on the dryer machine in bathroom' subtitle={`Power: ${on ? 'ON' : 'OFF'}`} justifyContent="space-between">
      <Icon style={{ width: '20em', fill: theme.palette.secondary.main }} />
      <div className={classes.controlContainer}>
        <div className={classes.text}>
          <h3>Power: {on ? 'ON' : 'OFF'}</h3>
        </div>
        <ButtonComponent className={classes.buttonContainer} iconName='power' on={on} set={set} onPowerChange={onPowerChange} clicked={clicked} />
      </div>
    </PluginContainer>
  )
}


