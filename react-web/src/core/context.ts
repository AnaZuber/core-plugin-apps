import { createContext } from "react";

export type Plugin = {
  id: string;
  menuItems: MenuItem[];
  pages: Page[];
}

export type MenuItem = {
  label: string;
  path: string;
  icon?: string;
  menuItems?: MenuItem[];
}

export type Page = {
  component: JSX.Element;
  path: string;
}

export type Theme = {
  theme: string,
  palette: {
    primary: { [key: string]: string },
    secondary: { [key: string]: string },
    background: { [key: string]: string },
  }
}

type CoreContextType = {
  menuItems: MenuItem[];
  pages: Page[];
  theme: Theme;
}

export const CoreContext = createContext<CoreContextType>({
  menuItems: [],
  pages: [],
} as any);