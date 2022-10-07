import { FC } from 'react';
import { VerticalContainer } from '../../components';

type Props = {
    children: any;
    className?: string;
}

export const ContentContainer: FC<Props> = ({ children, className }) => {
    return (
        <VerticalContainer className={className || ''} justifyContent="flex-start" alignItems="stretch" minWidth="100vw" minHeight="100vh">
            {children}
        </VerticalContainer>
    );
}
