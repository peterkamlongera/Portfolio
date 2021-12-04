import "./App.css";

import ModuleOne from "./components/module-one.component.jsx";
import ModuleTwo from "./components/module-two.component.jsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ModuleOne />
        <ModuleTwo />
      </header>
    </div>
  );
}

export default App;
