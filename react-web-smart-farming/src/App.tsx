import './App.css';
import { Core, InitParams } from './core/Core';
import { registerPlugins } from './plugins/registerPlugins';

function App() {
  const init = ({ registerPlugin }: InitParams) => {
    registerPlugins(registerPlugin);
  }

  return (
    <Core initialize={init} />
  );
}

export default App;
