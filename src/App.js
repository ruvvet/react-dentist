import { BrowserRouter, Route } from 'react-router-dom';

import Home from './components/Home';
import Contact from './components/Contact';
import Procedures from './components/Procedures';
import Nav from './components/Nav';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* first define the path, and then the component which should be active on that path */}
        {/* putting 'exact' means only show for /, don't append */}
        <Route path ="/" exact component={Home} />
        <Route path ="/contact" component={Contact} />
        <Route path="/procedures" component={Procedures} />
      </div>
    </BrowserRouter>
  );
}

export default App;
