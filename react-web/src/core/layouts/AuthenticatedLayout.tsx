import { FC } from 'react';
import { createUseStyles } from 'react-jss';
import { VerticalContainer } from '../../components';
import { ContentContainer } from '../components/ContentContainer';

type Props = {
    children: any;
}

const useStyles = createUseStyles({
    contentContainer: {}
});

export const AuthenticatedLayout: FC<Props> = ({ children }) => {
    const classes = useStyles();

    return (
        <VerticalContainer justifyContent="flex-start" alignItems="flex-start" minHeight='100%'>
            <ContentContainer className={classes.contentContainer}>
                {children}
            </ContentContainer>
        </VerticalContainer>
    );
}