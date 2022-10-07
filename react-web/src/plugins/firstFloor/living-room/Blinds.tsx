import { createUseStyles } from "react-jss";
import { FC, useState } from "react";
import { ButtonComponent } from "../../shared/ButtonComponent";
import { useCoreTheme } from "../../../core/hooks";
import { PluginContainer } from "../../shared/PluginContainer";

const useStyles = createUseStyles({
  buttonContainer: {
    cursor: 'pointer',
    height: '15vh',
    width: '20vw',
    borderRadius: '50%',
    border: 0,
    fontWeight: 600,
    textTransform: 'uppercase',
    fontSize: '0.875 rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '50px'
  }
})

type Props = {
}

export const Blinds: FC<Props> = () => {
  const theme = useCoreTheme();
  const classes = useStyles(theme);

  const [onTop, setOnTop] = useState(false);
  const [onBottom, setOnBottom] = useState(false);
  const [onCircle, setOnCircle] = useState(true);

  const [clickedTop, setClickedTop] = useState(false);
  const [clickedBottom, setClickedBottom] = useState(false);
  const [clickedCircle, setClickedCircle] = useState(false);

  const onTopChange = () => {
    setOnTop(true);
    setOnBottom(false);
    setOnCircle(false);

  }

  const onBottomChange = () => {
    setOnTop(false);
    setOnBottom(true);
    setOnCircle(false);
  }

  const onCircleChange = () => {
    setOnTop(false);
    setOnBottom(false);
    setOnCircle(true);
  }

  return (
    <PluginContainer title='Blinds in living room' subtitle={`Current: ${onTop ? 'Open' : onBottom ? 'Closed' : 'Half open'}`} justifyContent="center">
      <ButtonComponent className={classes.buttonContainer} iconName='chevronTop' on={onTop} set={setClickedTop} onChange={onTopChange} clicked={clickedTop} />
      <ButtonComponent className={classes.buttonContainer} iconName='circle' on={onCircle} set={setClickedCircle} onChange={onCircleChange} clicked={clickedCircle} />
      <ButtonComponent className={classes.buttonContainer} iconName='chevronBottom' on={onBottom} set={setClickedBottom} onChange={onBottomChange} clicked={clickedBottom} />
    </PluginContainer>
  )
}


