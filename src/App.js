import React from 'react'
import Main from './components/Main'
import { HashRouter} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Main />
      </HashRouter>
    </div>
  );
}

export default App;
