import { useCoreTheme } from "../../core/hooks";
import { HorizontalContainer, IconRegistry, TextInput } from "../../components";
import { createUseStyles } from "react-jss";
import { ContentContainer } from "../../core/components/ContentContainer";
import background from "../../media/house.jpg";
import { VerticalContainer } from "../../components";
import { useSpring, animated } from '@react-spring/web';

const useStyles = createUseStyles({
    root: {
        display: 'flex',
        //alignItems: 'center',
        flexWrap: 'wrap',
        flexDirection: 'row',
        //minHeight: '100vh',
        //overflow: 'hidden',
        gridGap: '1em',
        gridTemplateColumns: 'repeat(auto-fill, minmax(15em, 1fr))',
        background: `linear-gradient(0deg, rgba(71,71,72,255) 0%, rgba(31,31,31,255) 100%)`
    },
    buttonContainer: {
        cursor: 'pointer',
        //height: '20vw',
        //width: '50vw',
        color: 'white'
    },
    itemContainer: {
        fontSize: '0.875 rem',
        textAlign: 'center',
    },
    number: {
        fontSize: '1.6em',
        margin: '10px 0 0 0',
        color: 'white',
        fontWeight: 600,
    },
    text: {
        fontSize: '1.2em',
        margin: '0 0 40px 0',
        color: 'rgb(104 105 106)',

    },
})

export const Dashboard = () => {
    const classes = useStyles();

    const IconThermostat = IconRegistry['thermostat'];
    const IconCloud = IconRegistry['cloud'];
    const IconOpacity = IconRegistry['opacity'];
    const IconDanger = IconRegistry['danger'];
    const IconSpeed = IconRegistry['speed'];

    const bgStyle = useSpring({
        to: [{ color: 'red' }, { color: 'white' }],
        from: { color: 'white' },
        delay: 700,
        config: { duration: 700 },
        loop: true,
    });

    const items = [ {
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
    {
        number: 'Yes',
        text: 'Motion Alarm',
        Icon: IconDanger,
    }
    ]

    return (
        <ContentContainer className={classes.root}>
             {items.map((item: any, i: number) => {
                        return (
                            <div key={i+item.number} className={classes.itemContainer}>
                                <div className={classes.buttonContainer} >
                                    <item.Icon sx={{ fontSize: '4em' }} />
                                </div>
                                <div className={classes.number}>{item.number}</div>
                                <div className={classes.text}>{item.text}</div>
                            </div>)
                    })}
            {/* <HorizontalContainer justifyContent="center" alignItems="center" minWidth="0vw" minHeight="100vh">
                <VerticalContainer justifyContent="center" alignItems="center" minWidth="0vw" minHeight="0vh">
                    <div className={classes.itemContainer}>
                        <div className={classes.buttonContainer} >
                            <IconThermostat sx={{ fontSize: '4em' }} />
                        </div>
                        <div className={classes.number}>21.6</div>
                        <div className={classes.text}>Temperature</div>
                    </div>
                    <div className={classes.itemContainer}>
                        <div className={classes.buttonContainer}  >
                            <IconOpacity sx={{ fontSize: '4em' }} />
                        </div>
                        <div className={classes.number}>57 %</div>
                        <div className={classes.text}>Humadity</div>
                    </div>
                    <div className={classes.itemContainer}>
                        <div className={classes.buttonContainer}  >
                            <IconSpeed sx={{ fontSize: '4em' }} />
                        </div>
                        <div className={classes.number}>1006 mbar</div>
                        <div className={classes.text}>Pressure</div>
                    </div>
                </VerticalContainer>
                <VerticalContainer justifyContent="center" alignItems="center" minWidth="0vw" minHeight="0vh">
                    <div className={classes.itemContainer}>
                        <div className={classes.buttonContainer}  >
                            <IconCloud sx={{ fontSize: '4em' }} />
                        </div>
                        <div className={classes.number}>498 ppm</div>
                        <div className={classes.text}>CO2</div>
                    </div>
                    <div className={classes.itemContainer}>
                        <div className={classes.buttonContainer}  >
                            <IconSpeed sx={{ fontSize: '4em' }} />
                        </div>
                        <div className={classes.number}>43 dB</div>
                        <div className={classes.text}>Noise</div>
                    </div>
                    <div className={classes.itemContainer}>
                        <animated.div style={bgStyle} className={classes.buttonContainer}  >
                            <IconDanger sx={{ fontSize: '4em' }} />
                        </animated.div>
                        <animated.div style={bgStyle} className={classes.number}>Yes</animated.div>
                        <animated.div style={bgStyle} className={classes.text}>Motion Alarm</animated.div>
                    </div>
                </VerticalContainer>
            </HorizontalContainer> */}
        </ContentContainer >
    )
}
