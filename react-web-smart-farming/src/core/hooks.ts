import { useContext } from "react";
import { CoreContext, Theme } from "./context";

export function useCoreTheme():  Theme {
  const { theme } = useContext(CoreContext);
  return theme;
}