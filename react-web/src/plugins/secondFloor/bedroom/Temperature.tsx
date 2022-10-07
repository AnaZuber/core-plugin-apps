import { createUseStyles } from "react-jss";
import { useCoreTheme } from "../../../core/hooks";
import { HorizontalContainer, IconRegistry } from "../../../components";
import { FC, useState } from "react";
import { useSpring, animated } from '@react-spring/web';
import { Theme } from "../../../core/context";
import { PluginContainer } from "../../shared/PluginContainer";

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
    margin: '20px 20px 20px 20px',
  },
  onButton: {
    color: ({ palette }: Theme) => palette.secondary.main,
    backgroundColor: ({ palette }: Theme) => palette.primary.main,
  },
  offButton: {
    color: ({ palette }: Theme) => palette.primary.main,
    backgroundColor: ({ palette }: Theme) => palette.secondary.main,
  },
  text: {
    height: '7vh',
    borderRadius: '10px',
    fontSize: '1.5em',
    textAlign: 'center',
    margin: '30px 5px 5px 5px',
    color: ({ palette }: Theme) => palette.secondary.main,

  },
  textContainer: {
    padding: '0 0 1em 0',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '10px',
    fontSize: '1em'
  },
  temperatureContainer: {
    borderRadius: '100%',
    border: '15px',
    height: '300px',
    width: '300px',
    borderColor: ({ palette }: Theme) => palette.primary.main,
    color: ({ palette }: Theme) => palette.secondary.main,
    margin: '60px',
    alignContent: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderStyle: 'solid',
    boxShadow: ({ palette }: Theme) => `5px 5px 8px ${palette.secondary.main}`,
  },
  controlContainer: {
    borderRadius: '100%',
    height: '80px',
    width: '80px',
    margin: '60px',
    padding: '20px',
    textAlign: 'center',
    fontSize: "4em",
    color: 'white',
  }
})

type Props = {
}

export const Temperature: FC<Props> = () => {
  const [on, setOn] = useState(true);
  const [temperature, setTemperature] = useState(19.5);
  const theme = useCoreTheme();
  const classes = useStyles(theme);

  const [clicked, set] = useState(false)
  const { scale } = useSpring({ scale: clicked ? 1.1 : 1 })

  var Icon = IconRegistry['power'];

  const onPowerChange = (on: boolean) => {
    setOn(!on);
  }

  const { transform } = useSpring({
    transform: scale.interpolate(s => `scale(${s})`),
    config: { duration: 10 },
  })

  return (
    <PluginContainer title='Turn on heating in bedroom' subtitle={`Heating: ${on ? 'ON' : 'OFF'}`} justifyContent="space-between">
      <div className={`${classes.temperatureContainer}`}>
        <h3 style={{ fontSize: '2.5em' }}>{temperature} C</h3>
        <div className={classes.textContainer}>
          <div className={classes.text}>
            <h3>Heating: {on ? 'ON' : 'OFF'}</h3>
            <b>Current: {temperature} </b>
            <b>Programmed: 20.0 </b>
          </div>
        </div>
      </div>
      <HorizontalContainer>
        <div className={classes.controlContainer} style={{ backgroundColor: theme.palette.primary.main, color: theme.palette.secondary.main }} onClick={() => setTemperature(temperature + 0.5)}> + </div>
        <div className={classes.controlContainer} style={{ backgroundColor: theme.palette.secondary.main, color: theme.palette.primary.main }} onClick={() => setTemperature(temperature - 0.5)}>  - </div>
      </HorizontalContainer>
      <animated.div
        onMouseDown={() => set(true)}
        onMouseUp={() => set(false)}
        onMouseLeave={() => set(false)}
        onMouseEnter={() => set(true)}
        style={{ transform }}
      >
        <div className={`${on ? classes.onButton : classes.offButton} ${classes.buttonContainer}`} onClick={() => onPowerChange(on)}>
          <Icon sx={{ fontSize: '2em' }} />
        </div>
      </animated.div>
    </PluginContainer>
  )
}


