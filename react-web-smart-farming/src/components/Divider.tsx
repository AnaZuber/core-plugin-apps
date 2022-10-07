import { FC } from 'react';

type Props = {
    className?: string;
}

export const Divider: FC<Props> = ({ className }) => {
    return (
        <hr className={className || ''} style={{border: 0, height: '1px'}} />
    );
}