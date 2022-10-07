import { HorizontalContainer, VerticalContainer, IconRegistry } from "../../components";
import { createUseStyles } from "react-jss";
import { ContentContainer } from "../../core/components/ContentContainer";
import { useSpring, animated } from '@react-spring/web';
import { Theme } from "../../core/context";
import { useCoreTheme } from "../../core/hooks";

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    gridGap: '1em',
    background: ({ palette }: Theme) => palette.background.gradient,
  },
  buttonContainer: {
    cursor: 'pointer',
    height: '80px',
    width: '180px',
    borderRadius: '80px',
    fontSize: '2em',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '20px 20px 20px 20px',
    color: ({ palette }: Theme) => palette.secondary.main,
  },
  itemContainer: {
    fontSize: '0.875 rem',
    textAlign: 'center',
  },
  number: {
    fontSize: '1.6em',
    margin: '10px 0 0 0',
    color: ({ palette }: Theme) => palette.secondary.main,
    fontWeight: 600,
  },
  text: {
    fontSize: '1.2em',
    margin: '0 0 40px 0',
    color: ({ palette }: Theme) => palette.secondary.main,
  },
})

export const Dashboard = () => {
  const theme = useCoreTheme();
  const classes = useStyles(theme);

  const IconThermostat = IconRegistry['thermostat'];
  const IconCloud = IconRegistry['cloud'];
  const IconOpacity = IconRegistry['opacity'];
  const IconDanger = IconRegistry['danger'];
  const IconSpeed = IconRegistry['speed'];

  const bgStyle = useSpring({
    to: [{ color: 'black' }, { color: theme.palette.secondary.main }],
    from: { color: theme.palette.secondary.main },
    delay: 700,
    config: { duration: 700 },
    loop: true,
  });

  const items1 = [{
    number: '21.6',
    text: 'Temperature',
    Icon: IconThermostat,
  },
  {
    number: '57 %',
    text: 'Humadity',
    Icon: IconOpacity,
  },
  {
    number: '1006 mbar',
    text: 'Pressure',
    Icon: IconSpeed,
  },
  ]

  const items2 = [
    {
      number: '498 ppm',
      text: 'CO2',
      Icon: IconCloud,
    },
    {
      number: '43 dB',
      text: 'Noise',
      Icon: IconSpeed,
    },
  ]

  return (
    <ContentContainer className={classes.root}>
      <HorizontalContainer justifyContent="center" alignItems="center" minWidth="0vw" minHeight="100vh">
        <VerticalContainer justifyContent="center" alignItems="center" minWidth="0vw" minHeight="0vh">
          {items1.map((item: any, i: number) => {
            return (
              <div key={i + item.number} className={classes.itemContainer}>
                <div className={classes.buttonContainer} >
                  <item.Icon sx={{ fontSize: '4em' }} />
                </div>
                <div className={classes.number}>{item.number}</div>
                <div className={classes.text}>{item.text}</div>
              </div>)
          })}
        </VerticalContainer>
        <VerticalContainer justifyContent="center" alignItems="center" minWidth="0vw" minHeight="0vh">
          {items2.map((item: any, i: number) => {
            return (
              <div key={i + item.number} className={classes.itemContainer}>
                <div className={classes.buttonContainer} >
                  <item.Icon sx={{ fontSize: '4em' }} />
                </div>
                <div className={classes.number}>{item.number}</div>
                <div className={classes.text}>{item.text}</div>
              </div>)
          })}
          <div className={classes.itemContainer}>
            <animated.div style={bgStyle} className={classes.buttonContainer}  >
              <IconDanger sx={{ fontSize: '4em' }} />
            </animated.div>
            <animated.div style={bgStyle} className={classes.number}>Yes</animated.div>
            <animated.div style={bgStyle} className={classes.text}>Motion Alarm</animated.div>
          </div>
        </VerticalContainer>
      </HorizontalContainer>
    </ContentContainer >
  )
}
