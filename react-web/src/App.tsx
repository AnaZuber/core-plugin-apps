import './App.css';
import { UnauthenticatedLayout } from './core/layouts/UnauthenticatedLayout';
import { LoginPage } from './core/pages/LoginPage';
import { useState } from 'react';
import { Core, InitParams } from './core/Core';
import { registerPlugins } from './plugins/registerPlugins';
import { CoreContext, MenuItem, Page, Theme } from './core/context';

function App() {
  const init = ({ registerPlugin }: InitParams) => {
    registerPlugins(registerPlugin);
  }

  return (
    <Core initialize={init} />
  );
}

export default App;
