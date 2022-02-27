import './App.css';

import Router from './component/Router';
import { DataPrivider } from './Context/DataContext';

function App() {
  return (
    <div className="App">
      <DataPrivider>
       <Router />
      </DataPrivider>
    </div>
  );
}

export default App;
