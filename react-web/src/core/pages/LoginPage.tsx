import { Card, VerticalContainer } from '../../components';
import { ContentContainer } from '../components/ContentContainer';
import LoginForm from '../components/LoginForm';
import { createUseStyles } from "react-jss";
import { Theme } from '../../core/context';
import { useCoreTheme } from '../../core/hooks';
import background from "../../media/house.jpg";

const useStyles = createUseStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    flexDirection: 'column',
    minHeight: '100vh',
    overflow: 'hidden',
  },
  splashBg: {
    backgroundImage: `url(${background})`,
    boxShadow: `inset 0 0 0 2000px rgba(43,154,219,0.9)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  img: {
    paddingTop: '5em',
    paddingBottom: '2em',
  }
})
export const LoginPage = () => {
  const theme = useCoreTheme();
  const classes = useStyles(theme);

  return (
    <div className={`${classes.root} ${classes.splashBg} `}>
      <VerticalContainer justifyContent="center" alignItems="center" minWidth="100vw" minHeight="100vh">
        <LoginForm />
      </VerticalContainer>
    </div>
  );
}