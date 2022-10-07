import { createUseStyles } from "react-jss";
import { IconRegistry } from "../../components";
import { FC, useState } from "react";
import { useSpring, animated } from '@react-spring/web';
import { Theme } from "../../core/context";
import { useCoreTheme } from "../../core/hooks";

const useStyles = createUseStyles({
  onButton: {
    color: ({ palette }: Theme) => palette.secondary.main,
    backgroundColor: ({ palette }: Theme) => palette.primary.main,
  },
  offButton: {
    color: ({ palette }: Theme) => palette.primary.main,
    backgroundColor: ({ palette }: Theme) => palette.secondary.main,
  }
})

type Props = {
  className?: string;
  iconName: keyof typeof IconRegistry;
  iconFontSize?: string;
  on: boolean;
  set: (value: boolean) => void;
  onPowerChange?: (value: boolean) => void;
  onChange?: () => void;
  clicked: boolean;

}

export const ButtonComponent: FC<Props> = ({ className, iconName, onPowerChange,iconFontSize, on, set, clicked, onChange }) => {
  const theme = useCoreTheme();
  const classes = useStyles(theme);

  const { scale } = useSpring({ scale: clicked ? 1.1 : 1 })
  const Icon = IconRegistry[iconName];

  const { transform } = useSpring({
    transform: scale.interpolate(s => `scale(${s})`),
    config: { duration: 10 },
  })

  return (
    <animated.div
      onMouseDown={() => set(true)}
      onMouseUp={() => set(false)}
      onMouseLeave={() => set(false)}
      onMouseEnter={() => set(true)}
      style={{ transform }}
    >
      <div className={`${on ? classes.onButton : classes.offButton} ${className}`} onClick={() => onPowerChange ? onPowerChange(on) : onChange ? onChange() : {}}>
        <Icon sx={{ fontSize: iconFontSize || '2em' }} />
      </div>
    </animated.div >
  )
}


