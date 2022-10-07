import { FC, useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Sidebar } from "./components/sidebar/Sidebar";
import { CoreContext, MenuItem, Page, Plugin, Theme } from "./context";
import { AuthenticatedLayout } from "./layouts/AuthenticatedLayout";
import { UnauthenticatedLayout } from "./layouts/UnauthenticatedLayout";
import { LoginPage } from "./pages/LoginPage";
import { Routes } from "./Routes";

export type InitParams = {
  registerPlugin: (plugin: Plugin) => any;
}

type Props = {
  initialize: (params: InitParams) => any;
}

const loggedIn = true;

const lightTheme: Theme = {
  theme: 'light',
  palette: {
    primary: {
      main: '#dceee0',
    },
    secondary: {
      main: '#16a155',
    },
    background: {
      primary: 'rgb(228 255 219)',
      secondary: 'rgb(171 247 146)',
      gradient: 'linear-gradient(173deg, rgb(228 255 219) 0%, rgb(171 247 146) 120%)'
    }
  }
}

const darkTheme: Theme = {
  theme: 'dark',
  palette: {
    primary: {
      main: '#1d934c',
    },
    secondary: {
      main: '#ffffff',
    },
    background: {
      primary: 'rgb(248 248 249)',
      secondary: 'rgb(141 148 159)',
      gradient: 'linear-gradient(173deg, rgb(187 209 98) 0%, rgb(11, 149, 72) 140%)',
    }
  }
}

export const Core: FC<Props> = ({ initialize }) => {
  const [theme, setTheme] = useState<Theme>(lightTheme);
  const [isDark, onThemeChange] = useState(false);

  const [registeredPluginIds, setRegisteredPluginIds] = useState<string[]>([]);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [pages, setPages] = useState<Page[]>([]);

  const registerPlugin = (plugin: Plugin) => {
    if (registeredPluginIds.includes(plugin.id)) return;
    setRegisteredPluginIds(prevPluginIds => [...prevPluginIds, plugin.id]);
    setMenuItems(prevMenuItems => [...prevMenuItems, ...plugin.menuItems]);
    setPages(prevPages => [...prevPages, ...plugin.pages]);
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => initialize({ registerPlugin }), []);

  useEffect(() => {
    isDark ? setTheme(darkTheme) : setTheme(lightTheme);
  }, [isDark]);

  return (
    <CoreContext.Provider value={{ menuItems, pages, theme }}>
      <BrowserRouter>
        {
          !loggedIn ?
            <UnauthenticatedLayout>
              <LoginPage />
            </UnauthenticatedLayout>
            :
            <AuthenticatedLayout>
              <Sidebar setTheme={onThemeChange} isDark={isDark} />
              <Routes />
            </AuthenticatedLayout>}
      </BrowserRouter>
    </CoreContext.Provider>
  );
}