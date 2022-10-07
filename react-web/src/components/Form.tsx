import { FC } from 'react';

type Props = {
    children: any;
    onSubmit: any;
    className?: string;
}

export const Form: FC<Props> = ({ children, className, onSubmit }) => {
    const handleSubmit = (e: any) => {
        e.preventDefault();
        onSubmit(e);
    }
    return (
        <form className={className || ''} onSubmit={handleSubmit} autoComplete="off">
            {children}
        </form>
    );
}