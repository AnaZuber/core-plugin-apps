import { FC } from 'react';
import { VerticalContainer } from '../../components';

type Props = {
    children: any;
}

export const UnauthenticatedLayout: FC<Props> = ({ children }) => {
    return (
        <VerticalContainer minWidth='100vh' minHeight='100vh'>
            {children}
        </VerticalContainer>
    );
}