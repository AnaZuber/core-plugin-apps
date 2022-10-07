import { Card, VerticalContainer } from '../../components';
import { ContentContainer } from '../components/ContentContainer';
import LoginForm from '../components/LoginForm';
import { createUseStyles } from "react-jss";
import { Theme } from '../../core/context';
import { useCoreTheme } from '../../core/hooks';
import background from "../../media/background.jpg";

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
    boxShadow: `inset 0 0 0 2000px rgba(34,54,44,0.76)`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
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