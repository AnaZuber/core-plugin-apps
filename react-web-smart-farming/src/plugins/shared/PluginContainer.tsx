import { createUseStyles } from "react-jss";
import { useCoreTheme } from "../../core/hooks";
import { ContentContainer } from "../../core/components/ContentContainer";
import { VerticalContainer } from "../../components";
import { FC } from "react";
import { Theme } from "../../core/context";

const useStyles = createUseStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'wrap',
        flexDirection: 'column',
        minHeight: '100vh',
        overflow: 'hidden',
        background: ({ palette }: Theme) => palette.background.gradient,
    },
    title: {
        color: ({ palette }: Theme) => palette.secondary.main,
        fontFamily: 'monospace',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        width: '340px'

    }
})

type Props = {
    children: any,
    title?: string,
    subtitle?: string,
    justifyContent?: "flex-start" | "center" | "flex-end" | "space-between" | "space-around" | "space-evenly" | undefined
}

export const PluginContainer: FC<Props> = ({ children, title, subtitle, justifyContent }) => {
    const theme = useCoreTheme();
    const classes = useStyles(theme);

    return (
        <ContentContainer className={`${classes.root}`}>
            <VerticalContainer justifyContent={justifyContent} alignItems="center" minWidth="100vw" minHeight="100vh">
                <div className={classes.title}>
                    <h1>{title}</h1>
                    <h2>{subtitle}</h2>
                </div>
                {children}
            </VerticalContainer>
        </ContentContainer >
    )
}


